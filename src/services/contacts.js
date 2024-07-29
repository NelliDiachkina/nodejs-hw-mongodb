import ContactsCollection from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ page = 1, perPage = 10 }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const [count, data] = await Promise.all([
    ContactsCollection.find().countDocuments(),
    ContactsCollection.find().skip(skip).limit(limit),
  ]);

  const paginationInformation = calculatePaginationData(page, perPage, count);

  return { data, ...paginationInformation };
};

export const getContactById = async (id) => {
  return await ContactsCollection.findById(id);
};

export const createContact = async (payload) => {
  return await ContactsCollection.create(payload);
};

export const updateContact = async (id, payload) => {
  return await ContactsCollection.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteContactById = async (id) => {
  return await ContactsCollection.findOneAndDelete({ _id: id });
};
