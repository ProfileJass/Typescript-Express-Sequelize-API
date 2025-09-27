export declare class ApplicationError extends Error {
    constructor(message: string);
}
export declare class BadRequestError extends ApplicationError {
    constructor(message: string);
}
export declare class NotFoundError extends ApplicationError {
    constructor(message: string);
}
