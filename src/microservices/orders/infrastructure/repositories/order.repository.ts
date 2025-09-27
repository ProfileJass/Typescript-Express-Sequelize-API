import { OrderRepositoryInterface } from '../../domain/ports/order.repository.interface';
import { Order } from '../../domain/model/order.model';
import { CreateOrderRequest } from '../../application/dto/order.request';

export class OrderRepository implements OrderRepositoryInterface {
  async create(orderData: CreateOrderRequest): Promise<Order> {
    try {
      const order = await Order.create({
        userId: orderData.userId,
        total: orderData.total,
        fecha: new Date()
      });
      return order;
    } catch (error) {
      throw new Error(`Error creating order in repository: ${error}`);
    }
  }

  async findById(id: number): Promise<Order | null> {
    try {
      const order = await Order.findByPk(id, {
        include: ['user']
      });
      return order;
    } catch (error) {
      throw new Error(`Error finding order by ID in repository: ${error}`);
    }
  }

  async findAll(): Promise<Order[]> {
    try {
      const orders = await Order.findAll({
        include: ['user'],
        order: [['createdAt', 'DESC']]
      });
      return orders;
    } catch (error) {
      throw new Error(`Error finding all orders in repository: ${error}`);
    }
  }

  async findByUserId(userId: number): Promise<Order[]> {
    try {
      const orders = await Order.findAll({
        where: { userId },
        include: ['user'],
        order: [['createdAt', 'DESC']]
      });
      return orders;
    } catch (error) {
      throw new Error(`Error finding orders by user ID in repository: ${error}`);
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const deleted = await Order.destroy({
        where: { id }
      });
      return deleted > 0;
    } catch (error) {
      throw new Error(`Error deleting order in repository: ${error}`);
    }
  }
}