import { OrderDetailRepositoryInterface } from '../../domain/ports/order-detail.repository.interface';
import { OrderDetail } from '../../domain/model/order-detail.model';
import { CreateOrderDetailRequest } from '../../application/dto/order-detail.request';
export declare class OrderDetailRepository implements OrderDetailRepositoryInterface {
    create(orderDetailData: CreateOrderDetailRequest): Promise<OrderDetail>;
    findById(id: number): Promise<OrderDetail | null>;
    findByOrderId(orderId: number): Promise<OrderDetail[]>;
    delete(id: number): Promise<boolean>;
}
