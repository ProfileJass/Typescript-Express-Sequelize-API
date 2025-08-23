"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Product_1 = require("../models/Product");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user_shop',
    password: '12345678',
    database: 'shop_db',
    models: [Product_1.Product],
    logging: false,
});
exports.default = exports.sequelize;
//# sourceMappingURL=Sequelize.js.map