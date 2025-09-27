// Orders Microservice Entry Point
export { Order } from './domain/model/order.model';
export { OrderDetail } from './domain/model/order-detail.model';
export { OrderService } from './application/order.service';
export { OrderController } from './infrastructure/controllers/order.controller';
export { default as orderRouter } from './infrastructure/routers/order.router';

// DTOs
export { CreateOrderRequest, OrderResponse, OrderDetailResponse } from './application/dto/order.request';
export { CreateOrderDetailRequest } from './application/dto/order-detail.request';

// Interfaces
export { OrderRepositoryInterface } from './domain/ports/order.repository.interface';
export { OrderDetailRepositoryInterface } from './domain/ports/order-detail.repository.interface';