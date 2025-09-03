export class ApplicationError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class NotFoundError extends ApplicationError {
    constructor(message: string = "Recurso no encontrado") {
        super(message, 404);
    }
}

export class BadRequestError extends ApplicationError {
    constructor(message: string = "Petición inválida") {
        super(message, 400);
    }
}