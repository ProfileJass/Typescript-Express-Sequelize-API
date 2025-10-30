import { Router } from 'express';
import { OrderController } from '../controllers/order.controller';

const router = Router();
const orderController = new OrderController();

router.post('/', (req, res) => orderController.createOrder(req, res));
router.get('/getOrderById/:id', (req, res) => orderController.getOrderById(req, res));
router.get('/getOrder', (req, res) => orderController.getAllOrders(req, res));
router.get('/getOrdersByUserId/:userId', (req, res) => orderController.getOrdersByUserId(req, res));
router.get('/getDetailOrderById/:id', (req, res) => orderController.getOrderDetailById(req, res));
router.delete('/deleteOrder/:id', (req, res) => orderController.deleteOrder(req, res));

export default router;