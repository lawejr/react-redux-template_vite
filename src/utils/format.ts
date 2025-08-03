import { formatNumber } from 'accounting';
import IMask from 'imask';
import { isDefined } from '~/utils/types';

/**
 * @example
 * declOfNum(['Яблоко','Яблока','Яблок'], 0, true) // 0 Яблок
 * // or
 * const countComments = declOfNum.bind(null, ['Коментарий', 'Коментария', 'Комантариев'])
 * countComments(2) // Коментария
 */
function declOfNum(
  titles: Array<string>,
  n: number,
  withValue: boolean = true,
): string {
  const cases = [2, 0, 1, 1, 1, 2];
  let result = withValue ? `${n} ` : '';

  result +=
    titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]];

  return result;
}

function numberWithSpaces(
  src: string | number,
  precision?: number,
  postfix: string = '',
): string {
  const validNumber = canConvertToNum(src);

  if (validNumber === false) return String(src);

  const srcStr = normalizeStringForNumber(src);

  const afterComma = srcStr.split('.')[1];
  const defaultPrecision = afterComma ? afterComma.length : 0;
  const formatted = formatNumber(
    validNumber,
    precision || defaultPrecision,
    ' ',
    ',',
  );

  return postfix ? formatted + postfix : formatted;
}

function canConvertToNum(src: any) {
  const srcStr = normalizeStringForNumber(src);
  const srcNum = typeof src !== 'number' ? Number(srcStr) : src;

  return !isNaN(srcNum) && srcNum;
}

function normalizeStringForNumber(src: any) {
  if (!isDefined(src)) return '';

  return src.toString().replace(',', '.').replaceAll(' ', '');
}

const PHONE_DISPLAY_FORMAT = '+996 (000) 000 000';

function formatPhone(phone: string, format: string = PHONE_DISPLAY_FORMAT) {
  if (!phone) return '';

  const masked = IMask.createMask({
    mask: format,
  });

  return masked.resolve(phone);
}

export {
  declOfNum,
  numberWithSpaces,
  formatPhone,
  normalizeStringForNumber,
  PHONE_DISPLAY_FORMAT,
};
