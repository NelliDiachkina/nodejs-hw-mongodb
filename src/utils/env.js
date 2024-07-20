import dotenv from 'dotenv';
dotenv.config();

export default function env(name, defaultValue = 3000) {
  const value = process.env[name] || defaultValue;
  return value;
}
