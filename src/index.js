import initMongoConnection from './db/initMongoConnection.js';
import Contact from './db/models/contact.js';
import setupServer from './server.js';

async function bootstrap() {
  try {
    await initMongoConnection();
    const contacts = await Contact.find();
    console.log(contacts);
    setupServer();
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
