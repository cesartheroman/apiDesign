import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { authenticate } from './utils/auth';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   req.shh_secret = 'doggy';
//   next();
// });

app.get('/', (req, res) => {
  res.status(200);
  res.send('henlo!');
});

app.use('/api', authenticate, router);

export default app;
