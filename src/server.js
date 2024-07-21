import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import env from './utils/env.js';

export default function setupServer() {
  const PORT = Number(env('PORT', 3000));
  const app = express();

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(cors());

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
