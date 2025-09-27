import { Model } from 'sequelize-typescript';
import { User } from '../../../microservices/users/domain/user.model';
import { OrderDetail } from './order-detail.model';
export declare class Order extends Model {
    id: number;
    userId: number;
    user: User;
    total: number;
    fecha: Date;
    orderDetails: OrderDetail[];
}
export default Order;
