enum knownCodes {
  AUTHENTICATION = 401,
  AUTHORIZATION = 403,
  NOT_FOUND = 404,
  UNKNOWN = 500,
}

const defaultMessages: Record<number, string> = {
  [knownCodes.AUTHENTICATION]: 'Для просмотра страницы, войдите в систему',
  [knownCodes.AUTHORIZATION]: 'У вас недостаточно прав для просмотра страницы',
  [knownCodes.NOT_FOUND]: 'Такой страницы не существует',
  [knownCodes.UNKNOWN]: 'Что-то пошло не так',
};

export { knownCodes, defaultMessages };
export { BaseError } from './BaseError';
