"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getAllProducts() {
        try {
            return await this.productRepository.findAll();
        }
        catch (error) {
            throw new Error(`Error getting all products: ${error}`);
        }
    }
    async createProduct(productRequest) {
        try {
            if (!productRequest.name || !productRequest.price || !productRequest.categoryId) {
                throw new Error("Name, price and categoryId are required");
            }
            if (productRequest.price <= 0) {
                throw new Error("Price must be greater than 0");
            }
            return await this.productRepository.create(productRequest);
        }
        catch (error) {
            throw new Error(`Error creating product: ${error}`);
        }
    }
    async updateProduct(id, productRequest) {
        try {
            if (productRequest.price && productRequest.price <= 0) {
                throw new Error("Price must be greater than 0");
            }
            return await this.productRepository.update(id, productRequest);
        }
        catch (error) {
            throw new Error(`Error updating product: ${error}`);
        }
    }
}
exports.ProductService = ProductService;
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map