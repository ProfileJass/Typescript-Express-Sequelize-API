import 'reflect-metadata';
import express from 'express';
import userRouter from "./infrastructure/user.router";
import { errorHandler, notFoundHandler } from './shared/middleware/error-handler.middleware';

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;