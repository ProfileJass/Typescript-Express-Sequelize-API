import { Model } from 'sequelize-typescript';
import { Category } from './category.model';
export declare class Product extends Model {
    id: number;
    name: string;
    price: number;
    quantity: number;
    status: string;
    categoryId: number;
    category: Category;
}
export default Product;
