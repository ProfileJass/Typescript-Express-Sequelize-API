"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.createProduct = async (req, res) => {
            try {
                const productRequest = req.body;
                const product = await this.productService.createProduct(productRequest);
                res.status(201).json(product);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        };
        this.updateProduct = async (req, res) => {
            try {
                const id = parseInt(req.params.id);
                const productRequest = req.body;
                const product = await this.productService.updateProduct(id, productRequest);
                if (!product) {
                    res.status(404).json({ error: "Product not found" });
                    return;
                }
                res.json(product);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        };
        this.getAllProducts = async (req, res) => {
            try {
                const productsWithCategories = await this.productService.getAllProducts();
                res.json(productsWithCategories);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        };
    }
}
exports.ProductController = ProductController;
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map