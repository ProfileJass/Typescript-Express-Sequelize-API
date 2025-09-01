import { Request, Response } from 'express';
declare class ProductController {
    static createProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getAllProducts(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export default ProductController;
