"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.BadRequestError = exports.ApplicationError = void 0;
class ApplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ApplicationError';
    }
}
exports.ApplicationError = ApplicationError;
class BadRequestError extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = 'BadRequestError';
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=user.error.js.map