"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const response_handler_util_1 = __importDefault(require("../../../../shared/utils/response-handler.util"));
const validator_util_1 = __importDefault(require("../../../../shared/utils/validator.util"));
const error_handler_middleware_1 = require("../../../../shared/middleware/error-handler.middleware");
class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.createProduct = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
            const { name, price, quantity, status, categoryId } = req.body;
            const validationErrors = validator_util_1.default.validateFields([
                () => validator_util_1.default.required(name, 'name'),
                () => validator_util_1.default.string(name, 'name', 2),
                () => validator_util_1.default.required(price, 'price'),
                () => validator_util_1.default.price(price, 'price'),
                () => validator_util_1.default.required(quantity, 'quantity'),
                () => validator_util_1.default.positiveInteger(quantity, 'quantity'),
                () => validator_util_1.default.required(status, 'status'),
                () => validator_util_1.default.enum(status, 'status', ['active', 'inactive']),
                () => validator_util_1.default.required(categoryId, 'categoryId'),
                () => validator_util_1.default.positiveInteger(categoryId, 'categoryId')
            ]);
            if (validationErrors.length > 0) {
                return response_handler_util_1.default.validationError(res, validationErrors);
            }
            const productRequest = { name, price, quantity, status, categoryId };
            const product = await this.productService.createProduct(productRequest);
            return response_handler_util_1.default.success(res, product, 'Producto creado exitosamente', 201);
        });
        this.updateProduct = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
            const id = parseInt(req.params.id);
            const { name, price, quantity, status } = req.body;
            if (isNaN(id)) {
                return response_handler_util_1.default.badRequest(res, 'ID de producto inválido');
            }
            const validationErrors = validator_util_1.default.validateFields([
                ...(name !== undefined ? [() => validator_util_1.default.string(name, 'name', 2)] : []),
                ...(price !== undefined ? [() => validator_util_1.default.price(price, 'price')] : []),
                ...(quantity !== undefined ? [() => validator_util_1.default.positiveInteger(quantity, 'quantity')] : []),
                ...(status !== undefined ? [() => validator_util_1.default.enum(status, 'status', ['active', 'inactive'])] : [])
            ]);
            if (validationErrors.length > 0) {
                return response_handler_util_1.default.validationError(res, validationErrors);
            }
            const productRequest = { name, price, quantity, status };
            const product = await this.productService.updateProduct(id, productRequest);
            if (!product) {
                return response_handler_util_1.default.notFound(res, 'Producto');
            }
            return response_handler_util_1.default.success(res, product, 'Producto actualizado exitosamente');
        });
        this.getAllProducts = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
            const productsWithCategories = await this.productService.getAllProducts();
            return response_handler_util_1.default.success(res, productsWithCategories, `Se encontraron ${productsWithCategories.length} productos`);
        });
        this.getProductById = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return response_handler_util_1.default.badRequest(res, 'ID de producto inválido');
            }
            const productWithCategory = await this.productService.getProductById(id);
            if (!productWithCategory) {
                return response_handler_util_1.default.notFound(res, 'Producto');
            }
            return response_handler_util_1.default.success(res, productWithCategory, `Producto con ID ${id} encontrado`);
        });
        this.deleteProduct = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return response_handler_util_1.default.badRequest(res, 'ID de producto inválido');
            }
            const deleted = await this.productService.deleteProduct(id);
            if (!deleted) {
                return response_handler_util_1.default.notFound(res, 'Producto');
            }
            return response_handler_util_1.default.successNoData(res, `Producto con ID ${id} eliminado exitosamente`, 204);
        });
    }
}
exports.ProductController = ProductController;
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map