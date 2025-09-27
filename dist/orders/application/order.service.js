"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
class OrderService {
    constructor(orderRepository, orderDetailRepository) {
        this.orderRepository = orderRepository;
        this.orderDetailRepository = orderDetailRepository;
    }
    async createOrder(orderData) {
        try {
            // Create the order first
            const order = await this.orderRepository.create({
                userId: orderData.userId,
                total: orderData.total,
                orderDetails: orderData.orderDetails
            });
            // Create order details
            const orderDetailsPromises = orderData.orderDetails.map(detail => this.orderDetailRepository.create({
                orderId: order.id,
                productId: detail.productId,
                quantity: detail.quantity,
                price: detail.price
            }));
            const orderDetails = await Promise.all(orderDetailsPromises);
            return {
                id: order.id,
                userId: order.userId,
                total: order.total,
                fecha: order.fecha,
                orderDetails: orderDetails.map(detail => ({
                    id: detail.id,
                    orderId: detail.orderId,
                    productId: detail.productId,
                    quantity: detail.quantity,
                    price: detail.price
                }))
            };
        }
        catch (error) {
            throw new Error(`Error creating order: ${error}`);
        }
    }
    async getOrderById(id) {
        try {
            const order = await this.orderRepository.findById(id);
            if (!order)
                return null;
            const orderDetails = await this.orderDetailRepository.findByOrderId(id);
            return {
                id: order.id,
                userId: order.userId,
                total: order.total,
                fecha: order.fecha,
                orderDetails: orderDetails.map(detail => ({
                    id: detail.id,
                    orderId: detail.orderId,
                    productId: detail.productId,
                    quantity: detail.quantity,
                    price: detail.price
                }))
            };
        }
        catch (error) {
            throw new Error(`Error getting order by ID: ${error}`);
        }
    }
    async getAllOrders() {
        try {
            const orders = await this.orderRepository.findAll();
            const ordersWithDetails = await Promise.all(orders.map(async (order) => {
                const orderDetails = await this.orderDetailRepository.findByOrderId(order.id);
                return {
                    id: order.id,
                    userId: order.userId,
                    total: order.total,
                    fecha: order.fecha,
                    orderDetails: orderDetails.map(detail => ({
                        id: detail.id,
                        orderId: detail.orderId,
                        productId: detail.productId,
                        quantity: detail.quantity,
                        price: detail.price
                    }))
                };
            }));
            return ordersWithDetails;
        }
        catch (error) {
            throw new Error(`Error getting all orders: ${error}`);
        }
    }
    async getOrderDetailById(id) {
        try {
            const orderDetail = await this.orderDetailRepository.findById(id);
            if (!orderDetail)
                return null;
            return {
                id: orderDetail.id,
                orderId: orderDetail.orderId,
                productId: orderDetail.productId,
                quantity: orderDetail.quantity,
                price: orderDetail.price
            };
        }
        catch (error) {
            throw new Error(`Error getting order detail by ID: ${error}`);
        }
    }
    async deleteOrder(id) {
        try {
            return await this.orderRepository.delete(id);
        }
        catch (error) {
            throw new Error(`Error deleting order: ${error}`);
        }
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map