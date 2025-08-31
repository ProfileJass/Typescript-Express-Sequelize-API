import 'reflect-metadata';
import express from 'express';
import userRouter from './routers/user.router';
import productRouter from './products/infrastructure/routers/product.router';

const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);

export default app;