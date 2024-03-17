function normalizeStringForNumber(src: any) {
  if (!src?.length) return '';

  let result = src;

  if (src[0] === ',' || src[0] === '.') {
    result = `0${result}`;
  }

  return result.replace(',', '.').replaceAll(' ', '');
}

export { normalizeStringForNumber };
