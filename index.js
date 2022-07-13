import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { getAllShop } from './controllers/shopController.js';
import { getItemsShop } from './controllers/itemController.js';
import { postOrderData } from './controllers/orderController.js';

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.hfofisu.mongodb.net/delivery?retryWrites=true&w=majority',
  )
  .then(() => console.log('db ok'))
  .catch(() => console.log('error'));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/shops', getAllShop);
app.get('/items/:itemsId', getItemsShop);

app.post('/order', postOrderData);

const PORT = process.env.PORT || 80;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('200 OK');
});
