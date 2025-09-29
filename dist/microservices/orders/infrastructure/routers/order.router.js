"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const router = (0, express_1.Router)();
const orderController = new order_controller_1.OrderController();
router.post('/', (req, res) => orderController.createOrder(req, res));
router.get('/getOrderById/:id', (req, res) => orderController.getOrderById(req, res));
router.get('/getOrder', (req, res) => orderController.getAllOrders(req, res));
router.get('/getDetailOrderById/:id', (req, res) => orderController.getOrderDetailById(req, res));
router.delete('/deleteOrder/:id', (req, res) => orderController.deleteOrder(req, res));
exports.default = router;
//# sourceMappingURL=order.router.js.map