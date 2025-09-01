import { Request, Response, NextFunction } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.header('x-api-key');

    if (!apiKey) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (apiKey !== "123") {
        return res.status(403).json({ message: 'Invalid AUTH key' });
    }

    next();
};