"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../services/ProductService"));
const CreateProductRequestDTO_1 = __importDefault(require("../dtos/CreateProductRequestDTO"));
const CreateProductResponseDTO_1 = __importDefault(require("../dtos/CreateProductResponseDTO"));
const GetProductsResponseDTO_1 = __importDefault(require("../dtos/GetProductsResponseDTO"));
const ApiResponseDTO_1 = require("../dtos/ApiResponseDTO");
class ProductController {
    static async createProduct(req, res) {
        try {
            const { name, price, quantity } = req.body;
            const dto = new CreateProductRequestDTO_1.default(name, price, quantity);
            const product = await ProductService_1.default.createProduct(dto);
            if (product) {
                const response = ApiResponseDTO_1.ApiResponseDTO.builder()
                    .success(true)
                    .message("Product successfully created")
                    .data(CreateProductResponseDTO_1.default.fromProduct(product))
                    .build();
                return res.status(201).json(response);
            }
            else {
                const response = ApiResponseDTO_1.ApiResponseDTO.builder()
                    .success(false)
                    .message("Error al crear el producto. Verifique los datos proporcionados")
                    .build();
                return res.status(400).json(response);
            }
        }
        catch (error) {
            if (error instanceof Error && error.message.includes('Datos inválidos')) {
                const response = ApiResponseDTO_1.ApiResponseDTO.builder()
                    .success(false)
                    .message(error.message)
                    .build();
                return res.status(400).json(response);
            }
            const response = ApiResponseDTO_1.ApiResponseDTO.builder()
                .success(false)
                .message('Error interno del servidor')
                .build();
            return res.status(500).json(response);
        }
    }
    static async getAllProducts(req, res) {
        try {
            const products = await ProductService_1.default.getAllProducts();
            const response = ApiResponseDTO_1.ApiResponseDTO.builder()
                .success(true)
                .message("Products successfully retrieved")
                .data(GetProductsResponseDTO_1.default.fromProductList(products))
                .build();
            return res.status(200).json(response);
        }
        catch (error) {
            const response = ApiResponseDTO_1.ApiResponseDTO.builder()
                .success(false)
                .message('Error interno del servidor')
                .build();
            return res.status(500).json(response);
        }
    }
}
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map