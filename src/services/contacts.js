import ContactsCollection from '../db/models/contact.js';

export const getAllContacts = async () => {
  return await ContactsCollection.find();
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
