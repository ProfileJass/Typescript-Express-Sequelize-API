import "reflect-metadata";
import express from "express";
import orderRouter from "./infrastructure/routers/order.router";
import {
  errorHandler,
  notFoundHandler,
} from "./shared/middleware/error-handler.middleware";

const app = express();
app.use(express.json());

app.use("/", orderRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
