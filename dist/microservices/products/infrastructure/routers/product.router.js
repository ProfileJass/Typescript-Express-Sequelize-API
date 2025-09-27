"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_repository_1 = require("../repositories/product.repository");
const product_service_1 = __importDefault(require("../../application/product.service"));
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const router = (0, express_1.Router)();
const productService = new product_service_1.default(product_repository_1.productRepository);
const productController = new product_controller_1.default(productService);
router.post('/createProducts', productController.createProduct);
router.put('/updateProducts/:id', productController.updateProduct);
router.get('/getAllProducts', productController.getAllProducts);
exports.default = router;
//# sourceMappingURL=product.router.js.map