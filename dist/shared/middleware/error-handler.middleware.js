"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = exports.notFoundHandler = exports.errorHandler = void 0;
const response_handler_util_1 = __importDefault(require("../utils/response-handler.util"));
const errorHandler = (error, req, res, next) => {
    console.error('🚨 Error Handler:', {
        message: error.message,
        stack: error.stack,
        url: req.url,
        method: req.method,
        timestamp: new Date().toISOString()
    });
    switch (error.code) {
        case 'ECONNREFUSED':
            return response_handler_util_1.default.internalError(res, 'Error de conexión con la base de datos', 'DATABASE_CONNECTION_ERROR');
        case 'ER_DUP_ENTRY':
            return response_handler_util_1.default.conflict(res, 'El registro ya existe');
        case 'ER_NO_REFERENCED_ROW_2':
            return response_handler_util_1.default.badRequest(res, 'Referencia inválida - El registro relacionado no existe', 'FOREIGN_KEY_CONSTRAINT');
        case 'ER_ROW_IS_REFERENCED_2':
            return response_handler_util_1.default.conflict(res, 'No se puede eliminar - El registro está siendo utilizado por otros datos');
        default:
            const statusCode = error.statusCode || 500;
            switch (statusCode) {
                case 400:
                    return response_handler_util_1.default.badRequest(res, error.message);
                case 401:
                    return response_handler_util_1.default.unauthorized(res, error.message);
                case 403:
                    return response_handler_util_1.default.forbidden(res, error.message);
                case 404:
                    return response_handler_util_1.default.notFound(res, error.message);
                case 409:
                    return response_handler_util_1.default.conflict(res, error.message);
                default:
                    return response_handler_util_1.default.internalError(res, 'Error interno del servidor', error.message);
            }
    }
};
exports.errorHandler = errorHandler;
const notFoundHandler = (req, res) => {
    return response_handler_util_1.default.notFound(res, `Ruta ${req.method} ${req.url} no encontrada`);
};
exports.notFoundHandler = notFoundHandler;
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
exports.asyncHandler = asyncHandler;
exports.default = { errorHandler: exports.errorHandler, notFoundHandler: exports.notFoundHandler, asyncHandler: exports.asyncHandler };
//# sourceMappingURL=error-handler.middleware.js.map