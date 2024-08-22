import { CONTACT_TYPE_VALUES } from '../constants/constants.js';

const parseType = (type) => {
  if (typeof type !== 'string') return null;

  const isType = (type) => CONTACT_TYPE_VALUES.includes(type);

  return isType(type) ? type : null;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return null;

  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;

  return null;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return { contactType: parsedType, isFavourite: parsedIsFavourite };
};
