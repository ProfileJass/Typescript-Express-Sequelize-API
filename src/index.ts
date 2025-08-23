import 'reflect-metadata';
import express from 'express';
import productRouter from './routers/ProductRouter';
import sequelize from './database/Sequelize';
import { swaggerUi, specs } from './config/Swagger';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/products', productRouter);

sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3500, () => {
        console.log('Server running on port 3500');
        console.log('Swagger docs available at http://localhost:3500/api-docs');
    });
}).catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
});