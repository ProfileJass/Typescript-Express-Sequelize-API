import { ProductRepositoryInterface } from "../domain/ports/product.repository.interface";
import { ProductRequest } from "./dto/product.request";
import Product from "../domain/model/product.model";
import Category from "../domain/model/category.model";
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepositoryInterface);
    getAllProducts(): Promise<{
        product: Product;
        category: Category;
    }[]>;
    createProduct(productRequest: ProductRequest): Promise<Product>;
    updateProduct(id: number, productRequest: Partial<ProductRequest>): Promise<Product | null>;
}
export default ProductService;
