"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../models/Product"));
class ProductService {
    static async createProduct(data) {
        try {
            if (!data.name || data.price <= 0 || data.quantity < 0) {
                throw new Error('Datos inválidos para crear el producto');
            }
            const product = await Product_1.default.create({
                name: data.name,
                price: data.price,
                quantity: data.quantity
            });
            return product;
        }
        catch (error) {
            console.error('Error creating product:', error);
            return null;
        }
    }
    static async getAllProducts() {
        try {
            const products = await Product_1.default.findAll();
            return products;
        }
        catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }
}
exports.default = ProductService;
//# sourceMappingURL=ProductService.js.map