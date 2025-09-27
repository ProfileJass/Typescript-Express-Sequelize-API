"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const order_model_1 = require("../../domain/model/order.model");
class OrderRepository {
    async create(orderData) {
        try {
            const order = await order_model_1.Order.create({
                userId: orderData.userId,
                total: orderData.total,
                fecha: new Date()
            });
            return order;
        }
        catch (error) {
            throw new Error(`Error creating order in repository: ${error}`);
        }
    }
    async findById(id) {
        try {
            const order = await order_model_1.Order.findByPk(id, {
                include: ['user']
            });
            return order;
        }
        catch (error) {
            throw new Error(`Error finding order by ID in repository: ${error}`);
        }
    }
    async findAll() {
        try {
            const orders = await order_model_1.Order.findAll({
                include: ['user'],
                order: [['createdAt', 'DESC']]
            });
            return orders;
        }
        catch (error) {
            throw new Error(`Error finding all orders in repository: ${error}`);
        }
    }
    async findByUserId(userId) {
        try {
            const orders = await order_model_1.Order.findAll({
                where: { userId },
                include: ['user'],
                order: [['createdAt', 'DESC']]
            });
            return orders;
        }
        catch (error) {
            throw new Error(`Error finding orders by user ID in repository: ${error}`);
        }
    }
    async delete(id) {
        try {
            const deleted = await order_model_1.Order.destroy({
                where: { id }
            });
            return deleted > 0;
        }
        catch (error) {
            throw new Error(`Error deleting order in repository: ${error}`);
        }
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map