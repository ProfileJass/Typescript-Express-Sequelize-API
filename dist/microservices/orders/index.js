"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = exports.OrderController = exports.OrderService = exports.OrderDetail = exports.Order = void 0;
// Orders Microservice Entry Point
var order_model_1 = require("./domain/model/order.model");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return order_model_1.Order; } });
var order_detail_model_1 = require("./domain/model/order-detail.model");
Object.defineProperty(exports, "OrderDetail", { enumerable: true, get: function () { return order_detail_model_1.OrderDetail; } });
var order_service_1 = require("./application/order.service");
Object.defineProperty(exports, "OrderService", { enumerable: true, get: function () { return order_service_1.OrderService; } });
var order_controller_1 = require("./infrastructure/controllers/order.controller");
Object.defineProperty(exports, "OrderController", { enumerable: true, get: function () { return order_controller_1.OrderController; } });
var order_router_1 = require("./infrastructure/routers/order.router");
Object.defineProperty(exports, "orderRouter", { enumerable: true, get: function () { return __importDefault(order_router_1).default; } });
//# sourceMappingURL=index.js.map