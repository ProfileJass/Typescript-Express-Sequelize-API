import { ProductRepositoryInterface } from "../../domain/ports/product.repository.interface";
import Product from "../../domain/model/product.model";
import Category from "../../domain/model/category.model";
import { ProductRequest } from "../../application/dto/product.request";
export declare class ProductRepository implements ProductRepositoryInterface {
    findAll(): Promise<{
        product: Product;
        category: Category;
    }[]>;
    findById(id: number): Promise<{
        product: Product;
        category: Category;
    } | null>;
    create(productRequest: ProductRequest): Promise<Product>;
    update(id: number, productRequest: Partial<ProductRequest>): Promise<Product | null>;
    delete(id: number): Promise<boolean>;
}
export declare const productRepository: ProductRepository;
