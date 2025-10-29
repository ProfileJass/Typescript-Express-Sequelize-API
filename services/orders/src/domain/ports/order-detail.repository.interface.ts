import { OrderDetail } from '../model/order-detail.model';
import { CreateOrderDetailRequest } from '../../application/dto/order-detail.request';

export interface OrderDetailRepositoryInterface {
  create(orderDetailData: CreateOrderDetailRequest): Promise<OrderDetail>;
  findById(id: number): Promise<OrderDetail | null>;
  findByOrderId(orderId: number): Promise<OrderDetail[]>;
  delete(id: number): Promise<boolean>;
}