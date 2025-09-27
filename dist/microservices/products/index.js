"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = exports.ProductController = exports.ProductService = exports.Category = exports.Product = void 0;
// Products Microservice Entry Point
var product_model_1 = require("./domain/model/product.model");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return product_model_1.Product; } });
var category_model_1 = require("./domain/model/category.model");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return category_model_1.Category; } });
var product_service_1 = require("./application/product.service");
Object.defineProperty(exports, "ProductService", { enumerable: true, get: function () { return product_service_1.ProductService; } });
var product_controller_1 = require("./infrastructure/controllers/product.controller");
Object.defineProperty(exports, "ProductController", { enumerable: true, get: function () { return product_controller_1.ProductController; } });
var product_router_1 = require("./infrastructure/routers/product.router");
Object.defineProperty(exports, "productRouter", { enumerable: true, get: function () { return __importDefault(product_router_1).default; } });
//# sourceMappingURL=index.js.map