import { Request, Response } from "express";
import ProductService from "../../application/product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    getAllProducts: (req: Request, res: Response) => Promise<void>;
}
export default ProductController;
