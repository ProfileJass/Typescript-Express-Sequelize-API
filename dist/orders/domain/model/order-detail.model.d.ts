import { Model } from 'sequelize-typescript';
import { Order } from './order.model';
import { Product } from '../../../microservices/products/domain/model/product.model';
export declare class OrderDetail extends Model {
    id: number;
    orderId: number;
    order: Order;
    productId: number;
    product: Product;
    quantity: number;
    price: number;
}
export default OrderDetail;
