import Product from '../models/Product';
import CreateProductRequestDTO from '../dtos/CreateProductRequestDTO';
declare class ProductService {
    static createProduct(data: CreateProductRequestDTO): Promise<Product | null>;
    static getAllProducts(): Promise<Product[]>;
}
export default ProductService;
