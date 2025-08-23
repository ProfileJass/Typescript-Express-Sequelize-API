"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const ProductRouter_1 = __importDefault(require("./routers/ProductRouter"));
const Sequelize_1 = __importDefault(require("./database/Sequelize"));
const Swagger_1 = require("./config/Swagger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api-docs', Swagger_1.swaggerUi.serve, Swagger_1.swaggerUi.setup(Swagger_1.specs));
app.use('/products', ProductRouter_1.default);
Sequelize_1.default.sync().then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3500, () => {
        console.log('Server running on port 3500');
        console.log('Swagger docs available at http://localhost:3500/api-docs');
    });
}).catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
});
//# sourceMappingURL=index.js.map