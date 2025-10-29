import { Sequelize } from 'sequelize-typescript';
import { Order } from "../domain/model/order.model"
import { OrderDetail } from "../domain/model/order-detail.model";

export const sequelize = new Sequelize('tienda', 'usuario', 'usuario123', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: console.log,
  dialectOptions: {
    charset: 'utf8mb4',
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true,
  },
});

sequelize.addModels([Order, OrderDetail]);

export const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a MySQL establecida correctamente.');

    await sequelize.sync({ force: false });
    console.log('✅ Modelos sincronizados con la base de datos.');

  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    throw error;
  }
};
