import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';

async function bootstrap() {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
