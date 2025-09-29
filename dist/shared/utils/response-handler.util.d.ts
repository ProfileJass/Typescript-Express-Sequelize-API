import { Response } from 'express';
import { ValidationError } from '../interfaces/api-response.interface';
export declare class ResponseHandler {
    static success<T>(res: Response, data: T, message?: string, statusCode?: number): Response;
    static successNoData(res: Response, message?: string, statusCode?: number): Response;
    static error(res: Response, message: string, error: string, statusCode?: number): Response;
    static validationError(res: Response, validationErrors: ValidationError[], message?: string): Response;
    static notFound(res: Response, resource?: string): Response;
    static badRequest(res: Response, message?: string, error?: string): Response;
    static unauthorized(res: Response, message?: string): Response;
    static forbidden(res: Response, message?: string): Response;
    static conflict(res: Response, message?: string): Response;
    static internalError(res: Response, message?: string, error?: string): Response;
}
export default ResponseHandler;
