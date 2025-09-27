"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../microservices/users/domain/user.model");
const product_model_1 = require("../microservices/products/domain/model/product.model");
const category_model_1 = require("../microservices/products/domain/model/category.model");
const order_model_1 = require("../microservices/orders/domain/model/order.model");
const order_detail_model_1 = require("../microservices/orders/domain/model/order-detail.model");
const category_seeder_1 = require("../seeders/category.seeder");
exports.sequelize = new sequelize_typescript_1.Sequelize('tienda', 'usuario', 'usuario123', {
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
exports.sequelize.addModels([user_model_1.User, product_model_1.Product, category_model_1.Category, order_model_1.Order, order_detail_model_1.OrderDetail]);
const connectDB = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log('✅ Conexión a MySQL establecida correctamente.');
        await exports.sequelize.sync({ force: false });
        console.log('✅ Modelos sincronizados con la base de datos.');
        await (0, category_seeder_1.seedCategories)();
    }
    catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error);
        throw error;
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=database.js.map