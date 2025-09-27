import { Order } from '../model/order.model';
import { CreateOrderRequest } from '../../application/dto/order.request';
export interface OrderRepositoryInterface {
    create(orderData: CreateOrderRequest): Promise<Order>;
    findById(id: number): Promise<Order | null>;
    findAll(): Promise<Order[]>;
    findByUserId(userId: number): Promise<Order[]>;
    delete(id: number): Promise<boolean>;
}
