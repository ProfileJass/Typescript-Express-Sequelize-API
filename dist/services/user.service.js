"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const user_error_1 = require("../utils/user.error");
class UserService {
    async findAll() {
        return await user_repository_1.userRepository.findAll();
    }
    async findById(id) {
        if (isNaN(id)) {
            throw new user_error_1.BadRequestError("Formato de ID inválido.");
        }
        const user = await user_repository_1.userRepository.findById(id);
        if (!user) {
            throw new user_error_1.NotFoundError("Usuario no encontrado.");
        }
        return user;
    }
    async create(userRequest) {
        if (!userRequest.name || !userRequest.password || !userRequest.lastName) {
            throw new user_error_1.BadRequestError("Nombre, apellido y contraseña son requeridos.");
        }
        return await user_repository_1.userRepository.create({
            name: userRequest.name,
            lastName: userRequest.lastName,
            password: userRequest.password,
        });
    }
    async validateUser(name, password) {
        if (!name || !password) {
            throw new user_error_1.BadRequestError("Nombre y contraseña son requeridos.");
        }
        const users = await user_repository_1.userRepository.findByName(name);
        const user = users.find(user => user.password === password);
        if (!user) {
            throw new user_error_1.NotFoundError("Usuario no encontrado.");
        }
        return user;
    }
    async deleteUserById(id) {
        const user = await this.findById(id);
        if (!user) {
            throw new user_error_1.NotFoundError("Usuario no encontrado.");
        }
        return await user_repository_1.userRepository.delete(id);
    }
    async updateUser(id, userRequest) {
        const user = await user_repository_1.userRepository.update(id, userRequest);
        if (!user) {
            throw new user_error_1.NotFoundError("Usuario no encontrado.");
        }
        return user;
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map