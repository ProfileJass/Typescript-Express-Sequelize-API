import { Request, Response } from "express";
import ProductService from "../../application/product.service";
import { ProductRequest } from "../../application/dto/product.request";
import ResponseHandler from "../../shared/utils/response-handler.util";
import Validator from "../../shared/utils/validator.util";
import { asyncHandler } from "../../shared/middleware/error-handler.middleware";

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    createProduct = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
        const { name, price, quantity, status, categoryId } = req.body;

        const validationErrors = Validator.validateFields([
            () => Validator.required(name, 'name'),
            () => Validator.string(name, 'name', 2),
            () => Validator.required(price, 'price'),
            () => Validator.price(price, 'price'),
            () => Validator.required(quantity, 'quantity'),
            () => Validator.positiveInteger(quantity, 'quantity'),
            () => Validator.required(status, 'status'),
            () => Validator.enum(status, 'status', ['active', 'inactive']),
            () => Validator.required(categoryId, 'categoryId'),
            () => Validator.positiveInteger(categoryId, 'categoryId')
        ]);

        if (validationErrors.length > 0) {
            return ResponseHandler.validationError(res, validationErrors);
        }

        const productRequest: ProductRequest = { name, price, quantity, status, categoryId };
        const product = await this.productService.createProduct(productRequest);
        
        return ResponseHandler.success(
            res, 
            product, 
            'Producto creado exitosamente', 
            201
        );
    });

    updateProduct = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
        const id = parseInt(req.params.id);
        const { name, price, quantity, status } = req.body;

        if (isNaN(id)) {
            return ResponseHandler.badRequest(res, 'ID de producto inválido');
        }

        const validationErrors = Validator.validateFields([
            ...(name !== undefined ? [() => Validator.string(name, 'name', 2)] : []),
            ...(price !== undefined ? [() => Validator.price(price, 'price')] : []),
            ...(quantity !== undefined ? [() => Validator.positiveInteger(quantity, 'quantity')] : []),
            ...(status !== undefined ? [() => Validator.enum(status, 'status', ['active', 'inactive'])] : [])
        ]);

        if (validationErrors.length > 0) {
            return ResponseHandler.validationError(res, validationErrors);
        }

        const productRequest: Partial<ProductRequest> = { name, price, quantity, status };
        const product = await this.productService.updateProduct(id, productRequest);
        
        if (!product) {
            return ResponseHandler.notFound(res, 'Producto');
        }
        
        return ResponseHandler.success(
            res, 
            product, 
            'Producto actualizado exitosamente'
        );
    });

    getAllProducts = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
        const productsWithCategories = await this.productService.getAllProducts();
        
        return ResponseHandler.success(
            res, 
            productsWithCategories, 
            `Se encontraron ${productsWithCategories.length} productos`
        );
    });

    getProductById = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return ResponseHandler.badRequest(res, 'ID de producto inválido');
        }

        const productWithCategory = await this.productService.getProductById(id);
        
        if (!productWithCategory) {
            return ResponseHandler.notFound(res, 'Producto');
        }
        
        return ResponseHandler.success(
            res, 
            productWithCategory, 
            `Producto con ID ${id} encontrado`
        );
    });

    deleteProduct = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return ResponseHandler.badRequest(res, 'ID de producto inválido');
        }

        const deleted = await this.productService.deleteProduct(id);
        
        if (!deleted) {
            return ResponseHandler.notFound(res, 'Producto');
        }
        
        return ResponseHandler.successNoData(
            res, 
            `Producto con ID ${id} eliminado exitosamente`,
            204
        );
    });
}

export default ProductController;