export declare class ApplicationError extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode: number);
}
export declare class NotFoundError extends ApplicationError {
    constructor(message?: string);
}
export declare class BadRequestError extends ApplicationError {
    constructor(message?: string);
}
