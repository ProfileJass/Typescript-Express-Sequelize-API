import { Model } from 'sequelize-typescript';
export declare class Product extends Model {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
export default Product;
