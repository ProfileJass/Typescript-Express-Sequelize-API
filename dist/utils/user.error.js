"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.NotFoundError = exports.ApplicationError = void 0;
class ApplicationError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.ApplicationError = ApplicationError;
class NotFoundError extends ApplicationError {
    constructor(message = "Recurso no encontrado") {
        super(message, 404);
    }
}
exports.NotFoundError = NotFoundError;
class BadRequestError extends ApplicationError {
    constructor(message = "Petición inválida") {
        super(message, 400);
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=user.error.js.map