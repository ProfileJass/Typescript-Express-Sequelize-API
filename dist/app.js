"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./microservices/users/infrastructure/user.router"));
const product_router_1 = __importDefault(require("./microservices/products/infrastructure/routers/product.router"));
const order_router_1 = __importDefault(require("./microservices/orders/infrastructure/routers/order.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Microservices routes
app.use('/users', user_router_1.default);
app.use('/products', product_router_1.default);
app.use('/orders', order_router_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map