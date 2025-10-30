import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { OrderDetail } from './order-detail.model';

@Table({
  tableName: 'pedidos',
  timestamps: true,
})
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'id_usuario'
  })
  userId!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  total!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  fecha!: Date;

  @HasMany(() => OrderDetail)
  orderDetails!: OrderDetail[];
}

export default Order;