import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// dotenv.config;

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console('connected');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
