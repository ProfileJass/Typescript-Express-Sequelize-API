"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailRepository = void 0;
const order_detail_model_1 = require("../../domain/model/order-detail.model");
class OrderDetailRepository {
    async create(orderDetailData) {
        try {
            const orderDetail = await order_detail_model_1.OrderDetail.create({
                orderId: orderDetailData.orderId,
                productId: orderDetailData.productId,
                quantity: orderDetailData.quantity,
                price: orderDetailData.price
            });
            return orderDetail;
        }
        catch (error) {
            throw new Error(`Error creating order detail in repository: ${error}`);
        }
    }
    async findById(id) {
        try {
            const orderDetail = await order_detail_model_1.OrderDetail.findByPk(id, {
                include: ['order', 'product']
            });
            return orderDetail;
        }
        catch (error) {
            throw new Error(`Error finding order detail by ID in repository: ${error}`);
        }
    }
    async findByOrderId(orderId) {
        try {
            const orderDetails = await order_detail_model_1.OrderDetail.findAll({
                where: { orderId },
                include: ['product'],
                order: [['createdAt', 'ASC']]
            });
            return orderDetails;
        }
        catch (error) {
            throw new Error(`Error finding order details by order ID in repository: ${error}`);
        }
    }
    async delete(id) {
        try {
            const deleted = await order_detail_model_1.OrderDetail.destroy({
                where: { id }
            });
            return deleted > 0;
        }
        catch (error) {
            throw new Error(`Error deleting order detail in repository: ${error}`);
        }
    }
}
exports.OrderDetailRepository = OrderDetailRepository;
//# sourceMappingURL=order-detail.repository.js.map