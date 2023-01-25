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

// app.get('/', (req, res) => {
//   res.status(200);
//   res.send('henlo!');
// });

app.use('/api', authenticate, router);
app.post('/user', createNewUser);
app.post('/signin', signin);

export default app;
