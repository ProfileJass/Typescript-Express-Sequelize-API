"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../application/user.service");
const user_error_1 = require("../application/utils/user.error");
const response_handler_util_1 = __importDefault(require("../../../shared/utils/response-handler.util"));
const validator_util_1 = __importDefault(require("../../../shared/utils/validator.util"));
const error_handler_middleware_1 = require("../../../shared/middleware/error-handler.middleware");
class UserController {
}
exports.UserController = UserController;
_a = UserController;
UserController.getAllUsers = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
    const users = await user_service_1.userService.findAll();
    return response_handler_util_1.default.success(res, users, `Se encontraron ${users.length} usuarios`);
});
UserController.getUserById = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return response_handler_util_1.default.badRequest(res, 'ID de usuario inválido');
    }
    try {
        const user = await user_service_1.userService.findById(id);
        return response_handler_util_1.default.success(res, user, `Usuario con ID ${id} encontrado`);
    }
    catch (error) {
        if (error instanceof user_error_1.ApplicationError) {
            return response_handler_util_1.default.notFound(res, 'Usuario');
        }
        throw error;
    }
});
UserController.createUser = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
    const { name, lastName, password } = req.body;
    const validationErrors = validator_util_1.default.validateFields([
        () => validator_util_1.default.required(name, 'name'),
        () => validator_util_1.default.string(name, 'name', 2),
        () => validator_util_1.default.required(lastName, 'lastName'),
        () => validator_util_1.default.string(lastName, 'lastName', 2),
        () => validator_util_1.default.required(password, 'password'),
        () => validator_util_1.default.string(password, 'password', 6)
    ]);
    if (validationErrors.length > 0) {
        return response_handler_util_1.default.validationError(res, validationErrors);
    }
    try {
        const userRequest = { name, lastName, password };
        const newUser = await user_service_1.userService.create(userRequest);
        return response_handler_util_1.default.success(res, newUser, 'Usuario creado exitosamente', 201);
    }
    catch (error) {
        if (error instanceof user_error_1.ApplicationError) {
            return response_handler_util_1.default.badRequest(res, error.message);
        }
        throw error;
    }
});
UserController.validateUser = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
    const { name, password } = req.body;
    const validationErrors = validator_util_1.default.validateFields([
        () => validator_util_1.default.required(name, 'name'),
        () => validator_util_1.default.string(name, 'name'),
        () => validator_util_1.default.required(password, 'password'),
        () => validator_util_1.default.string(password, 'password')
    ]);
    if (validationErrors.length > 0) {
        return response_handler_util_1.default.validationError(res, validationErrors);
    }
    try {
        const user = await user_service_1.userService.validateUser(name, password);
        return response_handler_util_1.default.success(res, user, 'Usuario validado exitosamente');
    }
    catch (error) {
        if (error instanceof user_error_1.ApplicationError) {
            return response_handler_util_1.default.unauthorized(res, 'Credenciales inválidas');
        }
        throw error;
    }
});
UserController.deleteUser = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return response_handler_util_1.default.badRequest(res, 'ID de usuario inválido');
    }
    try {
        const deleted = await user_service_1.userService.deleteUserById(id);
        if (deleted) {
            return response_handler_util_1.default.successNoData(res, `Usuario con ID ${id} eliminado exitosamente`, 204);
        }
        else {
            return response_handler_util_1.default.notFound(res, 'Usuario');
        }
    }
    catch (error) {
        if (error instanceof user_error_1.ApplicationError) {
            return response_handler_util_1.default.badRequest(res, error.message);
        }
        throw error;
    }
});
UserController.updateUser = (0, error_handler_middleware_1.asyncHandler)(async (req, res) => {
    const id = Number(req.params.id);
    const { name, lastName, password } = req.body;
    if (isNaN(id)) {
        return response_handler_util_1.default.badRequest(res, 'ID de usuario inválido');
    }
    const validationErrors = validator_util_1.default.validateFields([
        ...(name !== undefined ? [() => validator_util_1.default.string(name, 'name', 2)] : []),
        ...(lastName !== undefined ? [() => validator_util_1.default.string(lastName, 'lastName', 2)] : []),
        ...(password !== undefined ? [() => validator_util_1.default.string(password, 'password', 6)] : [])
    ]);
    if (validationErrors.length > 0) {
        return response_handler_util_1.default.validationError(res, validationErrors);
    }
    try {
        const userRequest = { name, lastName, password };
        const updatedUser = await user_service_1.userService.updateUser(id, userRequest);
        return response_handler_util_1.default.success(res, updatedUser, 'Usuario actualizado exitosamente');
    }
    catch (error) {
        if (error instanceof user_error_1.ApplicationError) {
            return response_handler_util_1.default.badRequest(res, error.message);
        }
        throw error;
    }
});
//# sourceMappingURL=user.controller.js.map