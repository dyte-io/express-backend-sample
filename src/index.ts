#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Router from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', Router);

app.get('/', (req, res) => {
  res.send('Dyte Backend Sample');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `⚡️[dyte-api-server]: Server is running at http://localhost:${PORT}`
  );
});
