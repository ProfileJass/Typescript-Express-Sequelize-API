import { OrderDetailRepositoryInterface } from '../../domain/ports/order-detail.repository.interface';
import { OrderDetail } from '../../domain/model/order-detail.model';
import { CreateOrderDetailRequest } from '../../application/dto/order-detail.request';

export class OrderDetailRepository implements OrderDetailRepositoryInterface {
  async create(orderDetailData: CreateOrderDetailRequest): Promise<OrderDetail> {
    try {
      const orderDetail = await OrderDetail.create({
        orderId: orderDetailData.orderId,
        productId: orderDetailData.productId,
        quantity: orderDetailData.quantity,
        price: orderDetailData.price
      });
      return orderDetail;
    } catch (error) {
      throw new Error(`Error creating order detail in repository: ${error}`);
    }
  }

  async findById(id: number): Promise<OrderDetail | null> {
    try {
      const orderDetail = await OrderDetail.findByPk(id, {
        include: ['order', 'product']
      });
      return orderDetail;
    } catch (error) {
      throw new Error(`Error finding order detail by ID in repository: ${error}`);
    }
  }

  async findByOrderId(orderId: number): Promise<OrderDetail[]> {
    try {
      const orderDetails = await OrderDetail.findAll({
        where: { orderId },
        include: ['product'],
        order: [['createdAt', 'ASC']]
      });
      return orderDetails;
    } catch (error) {
      throw new Error(`Error finding order details by order ID in repository: ${error}`);
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const deleted = await OrderDetail.destroy({
        where: { id }
      });
      return deleted > 0;
    } catch (error) {
      throw new Error(`Error deleting order detail in repository: ${error}`);
    }
  }
}