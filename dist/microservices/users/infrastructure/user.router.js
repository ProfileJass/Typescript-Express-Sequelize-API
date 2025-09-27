"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.get('/getAll/', user_controller_1.UserController.getAllUsers);
router.get('/getById/:id', user_controller_1.UserController.getUserById);
router.post('/createUser/', user_controller_1.UserController.createUser);
router.post('/validateUser/', user_controller_1.UserController.validateUser);
router.delete('/deleteUser/:id', user_controller_1.UserController.deleteUser);
exports.default = router;
//# sourceMappingURL=user.router.js.map