"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const user_error_1 = require("../utils/user.error");
class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await user_service_1.userService.findAll();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ message: "Ha ocurrido un error inesperado." });
        }
    }
    static async getUserById(req, res) {
        try {
            const id = Number(req.params.id);
            const user = await user_service_1.userService.findById(id);
            res.status(200).json(user);
        }
        catch (error) {
            if (error instanceof user_error_1.ApplicationError) {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Ha ocurrido un error inesperado." });
        }
    }
    static async createUser(req, res) {
        try {
            const { name, lastName, password } = req.body;
            const newUser = await user_service_1.userService.create({ name, lastName, password });
            res.status(201).json(newUser);
        }
        catch (error) {
            if (error instanceof user_error_1.ApplicationError) {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Ha ocurrido un error inesperado." });
        }
    }
    static async validateUser(req, res) {
        try {
            const { name, password } = req.body;
            const user = await user_service_1.userService.validateUser(name, password);
            res.status(200).json(user);
        }
        catch (error) {
            if (error instanceof user_error_1.ApplicationError) {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Ha ocurrido un error inesperado." });
        }
    }
    static async deleteUser(req, res) {
        try {
            const id = Number(req.params.id);
            const deleted = await user_service_1.userService.deleteUserById(id);
            if (deleted) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ message: "Usuario no encontrado." });
            }
        }
        catch (error) {
            if (error instanceof user_error_1.ApplicationError) {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Ha ocurrido un error inesperado." });
        }
    }
    static async updateUser(req, res) {
        try {
            const id = Number(req.params.id);
            const userRequest = req.body;
            const updatedUser = await user_service_1.userService.updateUser(id, userRequest);
            res.status(200).json(updatedUser);
        }
        catch (error) {
            if (error instanceof user_error_1.ApplicationError) {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Ha ocurrido un error inesperado." });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map