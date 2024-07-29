const parseNumber = (number, defaultValue) => {
  if (typeof number !== 'string') return defaultValue;

  const parsedNumber = parseInt(number);

  if (Number.isNaN(parsedNumber) || parsedNumber <= 0) return defaultValue;

  return parsedNumber;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;
  return { page: parseNumber(page, 1), perPage: parseNumber(perPage, 10) };
};
