import { ProductRepositoryInterface } from "../domain/ports/product.repository.interface";
import { ProductRequest } from "./dto/product.request";
import Product from "../domain/model/product.model";
import Category from "../domain/model/category.model";

export class ProductService {
    constructor(private readonly productRepository: ProductRepositoryInterface) {}

    async getAllProducts(): Promise<{ product: Product, category: Category }[]> {
        try {
            return await this.productRepository.findAll();
        } catch (error) {
            throw new Error(`Error getting all products: ${error}`);
        }
    }

    async createProduct(productRequest: ProductRequest): Promise<Product> {
        try {
            if (!productRequest.name || !productRequest.price || !productRequest.categoryId) {
                throw new Error("Name, price and categoryId are required");
            }
            
            if (productRequest.price <= 0) {
                throw new Error("Price must be greater than 0");
            }
            
            return await this.productRepository.create(productRequest);
        } catch (error) {
            throw new Error(`Error creating product: ${error}`);
        }
    }

    async updateProduct(id: number, productRequest: Partial<ProductRequest>): Promise<Product | null> {
        try {
            if (productRequest.price && productRequest.price <= 0) {
                throw new Error("Price must be greater than 0");
            }
            
            return await this.productRepository.update(id, productRequest);
        } catch (error) {
            throw new Error(`Error updating product: ${error}`);
        }
    }
}

export default ProductService;