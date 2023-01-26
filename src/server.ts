import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';

import { authenticate } from './utils';
import { createNewUser, signin } from './handlers';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  setTimeout(() => {
    next(new Error('hello'));
  }, 1);
});

app.use('/api', authenticate, router);
app.post('/user', createNewUser);
app.post('/signin', signin);

app.use((err, req, res, next) => {
  if (err.type === 'unauthorized') {
    res.status(401).json({ message: 'Invalid username or password' });
  } else if (err.type === 'input') {
    res.status(400).json({ message: 'Invalid input' });
  } else {
    res.status(500).json({ message: 'Oops, server error' });
  }
});

export default app;
