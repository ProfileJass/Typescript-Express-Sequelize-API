import { Request, Response, NextFunction } from 'express';
export interface CustomError extends Error {
    statusCode?: number;
    code?: string;
}
export declare const errorHandler: (error: CustomError, req: Request, res: Response, next: NextFunction) => Response;
export declare const notFoundHandler: (req: Request, res: Response) => Response;
export declare const asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => void;
declare const _default: {
    errorHandler: (error: CustomError, req: Request, res: Response, next: NextFunction) => Response;
    notFoundHandler: (req: Request, res: Response) => Response;
    asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => void;
};
export default _default;
