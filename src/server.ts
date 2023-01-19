import express from 'express';
const app = express();

app.get('/', (req, res) => {
  // res.statusCode = 201;
  res.status(200);
  // res.send('henlo from the server');
  res.json({ message: 'henloJson' });
  res.end();
  // res.send('Hello world');
});

export default app;
