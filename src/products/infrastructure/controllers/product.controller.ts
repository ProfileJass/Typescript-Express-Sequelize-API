import { Request, Response } from "express";
import ProductService from "../../application/product.service";
import { ProductRequest } from "../../application/dto/product.request";

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    createProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const productRequest: ProductRequest = req.body;
            const product = await this.productService.createProduct(productRequest);
            res.status(201).json(product);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    updateProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);
            const productRequest: Partial<ProductRequest> = req.body;
            const product = await this.productService.updateProduct(id, productRequest);
            
            if (!product) {
                res.status(404).json({ error: "Product not found" });
                return;
            }
            
            res.json(product);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    getAllProducts = async (req: Request, res: Response): Promise<void> => {
        try {
            const productsWithCategories = await this.productService.getAllProducts();
            res.json(productsWithCategories);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ProductController;