import "reflect-metadata";
import express from "express";
import productRouter from "./infrastructure/routers/product.router";
import {
  errorHandler,
  notFoundHandler,
} from "./shared/middleware/error-handler.middleware";

const app = express();
app.use(express.json());

app.use("/", productRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
