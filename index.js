import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { getAllShop } from './controllers/shopController.js';
import { getItemsShop } from './controllers/itemController.js';
import { postOrderData } from './controllers/orderController.js';

// Подключаемся к базе данных в MongoDB с помощью метода conect из библиотеки mongoose
mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.hfofisu.mongodb.net/delivery?retryWrites=true&w=majority',
  )
  // Обратоаем отвед метода
  .then(() => console.log('db ok'))
  .catch(() => console.log('error'));

// Для того чтоб создать бекенд на Node.js нужно установить библиотеку експрес.
const app = express();
// укажем что наше приложение будет испоьзовать json
app.use(express.json());
app.use(cors());

// Опишем наши действия если наш сервер app получит запрос с методом post
// 1) Первым пареметром укажем URL с которого мы будем обрабатывать запрос
// 2) Второй параметр это валидация, лучше всего валидация делать в отдельном файле. Для этой цели можно использовать библиотеку Validation-expres
// 3) Третим параметром укажем функцию которая принимает в себя request(данные которые нам отправил пользователь) и responce(ответ который мы должны отправить на фронтенд)
app.get('/shops', getAllShop);
app.get('/items/:itemsId', getItemsShop);

app.post('/order', postOrderData);

// для того чтоб запустить наше приложение нужно запустить его на веб сервере в данном случае запускаем его на порте 4000 и передаем функцию которая отдаст результата запуска сервера
app.listen(4000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('200 OK');
});
