import { ProductRepositoryInterface } from "../../domain/ports/product.repository.interface";
import Product from "../../domain/model/product.model";
import Category from "../../domain/model/category.model";
import { ProductRequest } from "../../application/dto/product.request";

export class ProductRepository implements ProductRepositoryInterface {
    async findAll(): Promise<{ product: Product, category: Category }[]> {
        const products = await Product.findAll({
            include: [{ model: Category, as: 'category' }]
        });
        
        return products.map(product => ({
            product,
            category: product.category
        }));
    }

    async findById(id: number): Promise<{ product: Product, category: Category } | null> {
        const product = await Product.findByPk(id, {
            include: [{ model: Category, as: 'category' }]
        });
        
        if (!product) return null;
        
        return { 
            product, 
            category: product.category 
        };
    }

    async create(productRequest: ProductRequest): Promise<Product> {
        const category = await Category.findByPk(productRequest.categoryId);
        if (!category) {
            throw new Error(`Category with id ${productRequest.categoryId} not found`);
        }

        const newProduct = await Product.create({
            name: productRequest.name,
            price: productRequest.price,
            quantity: productRequest.quantity || 0,
            status: productRequest.status || 'active',
            categoryId: productRequest.categoryId
        });

        return newProduct;
    }

    async update(id: number, productRequest: Partial<ProductRequest>): Promise<Product | null> {
        const product = await Product.findByPk(id);
        if (!product) return null;

        if (productRequest.categoryId) {
            const category = await Category.findByPk(productRequest.categoryId);
            if (!category) {
                throw new Error(`Category with id ${productRequest.categoryId} not found`);
            }
        }

        await product.update(productRequest);
        return product;
    }

    async delete(id: number): Promise<boolean> {
        const deletedRows = await Product.destroy({
            where: { id }
        });
        return deletedRows > 0;
    }
}

export const productRepository = new ProductRepository();