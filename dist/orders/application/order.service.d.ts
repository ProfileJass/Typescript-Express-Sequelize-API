import { OrderRepositoryInterface } from '../domain/ports/order.repository.interface';
import { OrderDetailRepositoryInterface } from '../domain/ports/order-detail.repository.interface';
import { CreateOrderRequest, OrderResponse } from './dto/order.request';
export declare class OrderService {
    private orderRepository;
    private orderDetailRepository;
    constructor(orderRepository: OrderRepositoryInterface, orderDetailRepository: OrderDetailRepositoryInterface);
    createOrder(orderData: CreateOrderRequest): Promise<OrderResponse>;
    getOrderById(id: number): Promise<OrderResponse | null>;
    getAllOrders(): Promise<OrderResponse[]>;
    getOrderDetailById(id: number): Promise<any>;
    deleteOrder(id: number): Promise<boolean>;
}
