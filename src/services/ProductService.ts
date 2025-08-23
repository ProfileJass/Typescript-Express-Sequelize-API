import Product from '../models/Product';
import CreateProductRequestDTO from '../dtos/CreateProductRequestDTO';

class ProductService {
    static async createProduct(data: CreateProductRequestDTO): Promise<Product | null> {
        try {
            if (!data.name || data.price <= 0 || data.quantity < 0) {
                throw new Error('Datos inválidos para crear el producto');
            }

            const product = await Product.create({
                name: data.name,
                price: data.price,
                quantity: data.quantity
            });
            
            return product;
        } catch (error) {
            console.error('Error creating product:', error);
            return null;
        }
    }

    static async getAllProducts(): Promise<Product[]> {
        try {
            const products = await Product.findAll();
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }
}

export default ProductService;