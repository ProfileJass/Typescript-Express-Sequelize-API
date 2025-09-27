import 'reflect-metadata';
import express from 'express';
import userRouter from './microservices/users/infrastructure/user.router';
import productRouter from './microservices/products/infrastructure/routers/product.router';
import orderRouter from './microservices/orders/infrastructure/routers/order.router';
import { errorHandler, notFoundHandler } from './shared/middleware/error-handler.middleware';

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;