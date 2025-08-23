import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Products API',
            version: '1.0.0',
            description: 'API para gestión de productos',
        },
        servers: [
            {
                url: 'http://localhost:3500',
                description: 'Servidor de desarrollo',
            },
        ],
    },
    apis: ['./src/routers/*.ts'],
};

const specs = swaggerJSDoc(options);

export { swaggerUi, specs };