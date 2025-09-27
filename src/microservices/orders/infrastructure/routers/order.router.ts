import { Router } from 'express';
import { OrderController } from '../controllers/order.controller';

const router = Router();
const orderController = new OrderController();

// POST /orders - Realizar un pedido
router.post('/', (req, res) => orderController.createOrder(req, res));

// GET /getOrderById/:id - Traer un pedido por Id
router.get('/getOrderById/:id', (req, res) => orderController.getOrderById(req, res));

// GET /getOrder - Traer todos los pedidos por usuario
router.get('/getOrder', (req, res) => orderController.getAllOrders(req, res));

// GET /getDetailOrderById/:id - Traer el detalle de los pedidos
router.get('/getDetailOrderById/:id', (req, res) => orderController.getOrderDetailById(req, res));

// DELETE /deleteOrder/:id - Eliminar un pedido
router.delete('/deleteOrder/:id', (req, res) => orderController.deleteOrder(req, res));

export default router;