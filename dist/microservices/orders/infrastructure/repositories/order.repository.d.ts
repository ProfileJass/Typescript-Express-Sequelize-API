import { OrderRepositoryInterface } from '../../domain/ports/order.repository.interface';
import { Order } from '../../domain/model/order.model';
import { CreateOrderRequest } from '../../application/dto/order.request';
export declare class OrderRepository implements OrderRepositoryInterface {
    create(orderData: CreateOrderRequest): Promise<Order>;
    findById(id: number): Promise<Order | null>;
    findAll(): Promise<Order[]>;
    findByUserId(userId: number): Promise<Order[]>;
    delete(id: number): Promise<boolean>;
}
