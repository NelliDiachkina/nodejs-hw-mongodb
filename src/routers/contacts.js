import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getAllContactsController));

contactsRouter.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);

contactsRouter.post('/contacts', ctrlWrapper(createContactController));

contactsRouter.patch(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(patchContactController),
);

contactsRouter.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
