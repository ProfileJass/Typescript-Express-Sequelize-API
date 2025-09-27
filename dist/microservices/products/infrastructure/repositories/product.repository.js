"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = exports.ProductRepository = void 0;
const product_model_1 = __importDefault(require("../../domain/model/product.model"));
const category_model_1 = __importDefault(require("../../domain/model/category.model"));
class ProductRepository {
    async findAll() {
        const products = await product_model_1.default.findAll({
            include: [{ model: category_model_1.default, as: 'category' }]
        });
        return products.map(product => ({
            product,
            category: product.category
        }));
    }
    async findById(id) {
        const product = await product_model_1.default.findByPk(id, {
            include: [{ model: category_model_1.default, as: 'category' }]
        });
        if (!product)
            return null;
        return {
            product,
            category: product.category
        };
    }
    async create(productRequest) {
        const category = await category_model_1.default.findByPk(productRequest.categoryId);
        if (!category) {
            throw new Error(`Category with id ${productRequest.categoryId} not found`);
        }
        const newProduct = await product_model_1.default.create({
            name: productRequest.name,
            price: productRequest.price,
            quantity: productRequest.quantity || 0,
            status: productRequest.status || 'active',
            categoryId: productRequest.categoryId
        });
        return newProduct;
    }
    async update(id, productRequest) {
        const product = await product_model_1.default.findByPk(id);
        if (!product)
            return null;
        if (productRequest.categoryId) {
            const category = await category_model_1.default.findByPk(productRequest.categoryId);
            if (!category) {
                throw new Error(`Category with id ${productRequest.categoryId} not found`);
            }
        }
        await product.update(productRequest);
        return product;
    }
    async delete(id) {
        const deletedRows = await product_model_1.default.destroy({
            where: { id }
        });
        return deletedRows > 0;
    }
}
exports.ProductRepository = ProductRepository;
exports.productRepository = new ProductRepository();
//# sourceMappingURL=product.repository.js.map