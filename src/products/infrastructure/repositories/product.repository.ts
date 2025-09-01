import { ProductRepositoryInterface } from "../../domain/ports/product.repository.interface";
import Product from "../../domain/model/product.model";
import Category from "../../domain/model/category.model";
import { ProductRequest } from "../../application/dto/product.request";
import { categories, getCategoryById } from "../../mock/category.mock";

export class ProductRepository implements ProductRepositoryInterface {
    private products: Product[] = [];
    private nextId = 1;

    async findAll(): Promise<{ product: Product, category: Category }[]> {
        return this.products.map(product => {
            const category = getCategoryById(product.categoryId);
            if (!category) {
                throw new Error(`Category with id ${product.categoryId} not found`);
            }
            return { product, category };
        });
    }

    async findById(id: number): Promise<{ product: Product, category: Category } | null> {
        const product = this.products.find(p => p.id === id);
        if (!product) return null;
        
        const category = getCategoryById(product.categoryId);
        if (!category) {
            throw new Error(`Category with id ${product.categoryId} not found`);
        }
        
        return { product, category };
    }

    async create(productRequest: ProductRequest): Promise<Product> {
        const category = getCategoryById(productRequest.categoryId);
        if (!category) {
            throw new Error(`Category with id ${productRequest.categoryId} not found`);
        }

        const newProduct: Product = {
            id: this.nextId++,
            name: productRequest.name,
            price: productRequest.price,
            quantity: productRequest.quantity || 0,
            status: productRequest.status || 'active',
            categoryId: productRequest.categoryId
        };

        this.products.push(newProduct);
        return newProduct;
    }

    async update(id: number, productRequest: Partial<ProductRequest>): Promise<Product | null> {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) return null;

        if (productRequest.categoryId) {
            const category = getCategoryById(productRequest.categoryId);
            if (!category) {
                throw new Error(`Category with id ${productRequest.categoryId} not found`);
            }
        }

        this.products[index] = {
            ...this.products[index],
            ...productRequest
        };

        return this.products[index];
    }

    async delete(id: number): Promise<boolean> {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) return false;

        this.products.splice(index, 1);
        return true;
    }
}

export const productRepository = new ProductRepository();