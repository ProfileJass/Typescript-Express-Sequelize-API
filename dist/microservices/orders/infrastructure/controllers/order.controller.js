"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("../../application/order.service");
const order_repository_1 = require("../repositories/order.repository");
const order_detail_repository_1 = require("../repositories/order-detail.repository");
class OrderController {
    constructor() {
        const orderRepository = new order_repository_1.OrderRepository();
        const orderDetailRepository = new order_detail_repository_1.OrderDetailRepository();
        this.orderService = new order_service_1.OrderService(orderRepository, orderDetailRepository);
    }
    // POST /orders - Realizar un pedido
    async createOrder(req, res) {
        try {
            const orderData = req.body;
            // Validar datos requeridos
            if (!orderData.userId || !orderData.total || !orderData.orderDetails || orderData.orderDetails.length === 0) {
                res.status(400).json({
                    success: false,
                    message: 'Missing required fields: userId, total, orderDetails'
                });
                return;
            }
            const order = await this.orderService.createOrder(orderData);
            res.status(201).json({
                success: true,
                message: 'Order created successfully',
                data: order
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error creating order',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    // GET /getOrderById/:id - Traer un pedido por Id
    async getOrderById(req, res) {
        try {
            const { id } = req.params;
            const orderId = parseInt(id);
            if (isNaN(orderId)) {
                res.status(400).json({
                    success: false,
                    message: 'Invalid order ID'
                });
                return;
            }
            const order = await this.orderService.getOrderById(orderId);
            if (!order) {
                res.status(404).json({
                    success: false,
                    message: 'Order not found'
                });
                return;
            }
            res.status(200).json({
                success: true,
                data: order
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error getting order',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    // GET /getOrder - Traer todos los pedidos por usuario
    async getAllOrders(req, res) {
        try {
            const orders = await this.orderService.getAllOrders();
            res.status(200).json({
                success: true,
                data: orders
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error getting orders',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    // GET /getDetailOrderById/:id - Traer el detalle de los pedidos
    async getOrderDetailById(req, res) {
        try {
            const { id } = req.params;
            const orderDetailId = parseInt(id);
            if (isNaN(orderDetailId)) {
                res.status(400).json({
                    success: false,
                    message: 'Invalid order detail ID'
                });
                return;
            }
            const orderDetail = await this.orderService.getOrderDetailById(orderDetailId);
            if (!orderDetail) {
                res.status(404).json({
                    success: false,
                    message: 'Order detail not found'
                });
                return;
            }
            res.status(200).json({
                success: true,
                data: orderDetail
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error getting order detail',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    // DELETE /deleteOrder/:id - Eliminar un pedido
    async deleteOrder(req, res) {
        try {
            const { id } = req.params;
            const orderId = parseInt(id);
            if (isNaN(orderId)) {
                res.status(400).json({
                    success: false,
                    message: 'Invalid order ID'
                });
                return;
            }
            const deleted = await this.orderService.deleteOrder(orderId);
            if (!deleted) {
                res.status(404).json({
                    success: false,
                    message: 'Order not found or could not be deleted'
                });
                return;
            }
            res.status(200).json({
                success: true,
                message: 'Order deleted successfully'
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error deleting order',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map