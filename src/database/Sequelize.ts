import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/Product';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user_shop',
    password: '12345678',
    database: 'shop_db',
    models: [Product],
    logging: false,
});

export default sequelize;