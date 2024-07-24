import { Router } from 'express';
import { getAllContacts, getContactById } from '../services/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
});

contactsRouter.get('/contacts/:contactId', async (req, res) => {
  const id = req.params.contactId;
  const contact = await getContactById(id);

  if (!contact) {
    return res.status(404).json({
      status: 404,
      message: `Contact not found`,
    });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with ${id}`,
    data: contact,
  });
});

export default contactsRouter;
