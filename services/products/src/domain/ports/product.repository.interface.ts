import Product from "../model/product.model";
import Category from "../model/category.model";
import { ProductRequest } from "../../application/dto/product.request";

export interface ProductRepositoryInterface {
    findAll(): Promise<{ product: Product, category: Category }[]>;
    findById(id: number): Promise<{ product: Product, category: Category } | null>;
    create(product: ProductRequest): Promise<Product>;
    update(id: number, product: Partial<ProductRequest>): Promise<Product | null>;
    delete(id: number): Promise<boolean>;
}