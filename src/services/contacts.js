import ContactsCollection from '../db/models/contact.js';

export async function getAllContacts() {
  return await ContactsCollection.find({});
}

export async function getContactById(id) {
  try {
    return await ContactsCollection.findById(id);
  } catch (error) {
    console.error(error);
    return null;
  }
}
