import { Request, Response } from "express";
import ProductService from "../../application/product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct: (req: Request, res: Response, next: import("express").NextFunction) => void;
    updateProduct: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getAllProducts: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getProductById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    deleteProduct: (req: Request, res: Response, next: import("express").NextFunction) => void;
}
export default ProductController;
