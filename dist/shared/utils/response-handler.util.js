"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
class ResponseHandler {
    static success(res, data, message = 'Operación exitosa', statusCode = 200) {
        const response = {
            success: true,
            message,
            data,
            timestamp: new Date().toISOString()
        };
        return res.status(statusCode).json(response);
    }
    static successNoData(res, message = 'Operación exitosa', statusCode = 200) {
        const response = {
            success: true,
            message,
            timestamp: new Date().toISOString()
        };
        return res.status(statusCode).json(response);
    }
    static error(res, message, error, statusCode = 500) {
        const response = {
            success: false,
            message,
            error,
            timestamp: new Date().toISOString(),
            code: statusCode
        };
        return res.status(statusCode).json(response);
    }
    static validationError(res, validationErrors, message = 'Errores de validación') {
        const response = {
            success: false,
            message,
            error: 'VALIDATION_ERROR',
            timestamp: new Date().toISOString(),
            code: 400,
            validationErrors
        };
        return res.status(400).json(response);
    }
    static notFound(res, resource = 'Recurso') {
        return this.error(res, `${resource} no encontrado`, 'NOT_FOUND', 404);
    }
    static badRequest(res, message = 'Solicitud inválida', error = 'BAD_REQUEST') {
        return this.error(res, message, error, 400);
    }
    static unauthorized(res, message = 'No autorizado') {
        return this.error(res, message, 'UNAUTHORIZED', 401);
    }
    static forbidden(res, message = 'Acceso denegado') {
        return this.error(res, message, 'FORBIDDEN', 403);
    }
    static conflict(res, message = 'Conflicto de datos') {
        return this.error(res, message, 'CONFLICT', 409);
    }
    static internalError(res, message = 'Error interno del servidor', error) {
        return this.error(res, message, error || 'INTERNAL_SERVER_ERROR', 500);
    }
}
exports.ResponseHandler = ResponseHandler;
exports.default = ResponseHandler;
//# sourceMappingURL=response-handler.util.js.map