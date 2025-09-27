import { Request, Response } from 'express';
export declare class OrderController {
    private orderService;
    constructor();
    createOrder(req: Request, res: Response): Promise<void>;
    getOrderById(req: Request, res: Response): Promise<void>;
    getAllOrders(req: Request, res: Response): Promise<void>;
    getOrderDetailById(req: Request, res: Response): Promise<void>;
    deleteOrder(req: Request, res: Response): Promise<void>;
}
