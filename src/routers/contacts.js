import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
} from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', getAllContactsController);
contactsRouter.get('/contacts/:contactId', getContactByIdController);

export default contactsRouter;
