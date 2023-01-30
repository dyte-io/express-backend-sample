#!/usr/bin/env node

const time_start = performance.now();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Router from './routes';
import IP_ADDRESS from './utils/ip';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', Router);

app.get('/', (_, res) => {
  res.send('Dyte Backend Sample');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  const time_end = performance.now();

  const timeTook = (time_end - time_start).toFixed(0);

  console.log(
    [
      `⚡️ Dyte API Client (took ${timeTook}ms)\n`,

      `💻 Local:   http://localhost:${PORT}`,
      ...(IP_ADDRESS ? [`🌐 Network: http://${IP_ADDRESS}:${PORT}`] : []),
      '',
    ].join('\n')
  );
});
