import mongoose from 'mongoose';
import env from '../utils/env.js';

export default async function initMongoConnection() {
  const username = env('MONGODB_USER');
  const password = env('MONGODB_PASSWORD');
  const url = env('MONGODB_URL');
  const db = env('MONGODB_DB');

  const connectionLink = `mongodb+srv://${username}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(connectionLink);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
