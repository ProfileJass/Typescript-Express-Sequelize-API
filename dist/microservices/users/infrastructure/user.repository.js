"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.UserRepository = void 0;
const user_model_1 = __importDefault(require("../domain/user.model"));
class UserRepository {
    async findAll() {
        return await user_model_1.default.findAll();
    }
    async findById(id) {
        return await user_model_1.default.findByPk(id);
    }
    async create(userData) {
        return await user_model_1.default.create(userData);
    }
    async update(id, userData) {
        const user = await user_model_1.default.findByPk(id);
        if (user) {
            await user.update(userData);
            return user;
        }
        return null;
    }
    async delete(id) {
        const deletedRows = await user_model_1.default.destroy({
            where: { id }
        });
        return deletedRows > 0;
    }
    async findByName(name) {
        return await user_model_1.default.findAll({
            where: { name }
        });
    }
}
exports.UserRepository = UserRepository;
exports.userRepository = new UserRepository();
//# sourceMappingURL=user.repository.js.map