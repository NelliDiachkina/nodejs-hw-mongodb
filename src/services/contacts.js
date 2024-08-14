import { SORT_ORDER } from '../constants/constants.js';
import ContactsCollection from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = 'name',
  sortOrder = SORT_ORDER.ASC,
  filter = {},
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsFilter = ContactsCollection.find();

  if (filter.type) {
    contactsFilter.where('contactType').equals(filter.type);
  }

  if (filter.isFavourite !== null) {
    contactsFilter.where('isFavourite').equals(filter.isFavourite);
  }

  contactsFilter.where('userId').equals(userId);

  const [count, data] = await Promise.all([
    ContactsCollection.find().merge(contactsFilter).countDocuments(),
    ContactsCollection.find()
      .merge(contactsFilter)
      .skip(skip)
      .limit(limit)
      .sort({
        [sortBy]: sortOrder,
      })
      .exec(),
  ]);

  const paginationInformation = calculatePaginationData(page, perPage, count);

  return { data, ...paginationInformation };
};

export const getContactById = async (id, userId) => {
  return await ContactsCollection.findOne({
    _id: id,
    userId,
  });
};

export const createContact = async ({ photo, ...payload }, userId) => {
  let url = null;

  if (photo) {
    url = await saveFileToUploadDir(photo);
  }

  return await ContactsCollection.create({ ...payload, userId, photo: url });
};

export const updateContact = async (
  contactId,
  { photo, ...payload },
  userId,
) => {
  let updatedData = { ...payload };

  if (photo) {
    const url = await saveFileToUploadDir(photo);
    updatedData.photo = url;
  }

  return await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    updatedData,
    { new: true },
  );
};

export const deleteContactById = async (id, userId) => {
  return await ContactsCollection.findOneAndDelete({ _id: id, userId });
};
