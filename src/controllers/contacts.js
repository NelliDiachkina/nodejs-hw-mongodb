import { getAllContacts, getContactById } from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const id = req.params.contactId;
  const contact = await getContactById(id);

  if (!contact) {
    next(new Error('Student not found'));
    return;
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with ${id}`,
    data: contact,
  });
};
