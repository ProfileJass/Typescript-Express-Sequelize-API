import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from './order.model';

@Table({
  tableName: 'detalle_pedidos',
  timestamps: true,
})
export class OrderDetail extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'id_pedido' 
  })
  orderId!: number;

  @BelongsTo(() => Order)
  order!: Order;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'id_producto' 
  })
  productId!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  quantity!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;
}

export default OrderDetail;