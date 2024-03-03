import express from 'express';
const app = express();
const port = 3000;

import TestAbsoluteRouter from './routes/nest/test-absolute';

app.use('/add', TestAbsoluteRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});