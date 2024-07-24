import dotenv from 'dotenv';
dotenv.config();

export default function env(name, defaultValue) {
  if (process.env[name]) return process.env[name];
  if (defaultValue) return defaultValue;

  throw new Error(`${name} variable is not found`);
}
