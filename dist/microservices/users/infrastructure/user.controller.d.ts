import { Request, Response } from "express";
export declare class UserController {
    static getAllUsers: (req: Request, res: Response, next: import("express").NextFunction) => void;
    static getUserById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    static createUser: (req: Request, res: Response, next: import("express").NextFunction) => void;
    static validateUser: (req: Request, res: Response, next: import("express").NextFunction) => void;
    static deleteUser: (req: Request, res: Response, next: import("express").NextFunction) => void;
    static updateUser: (req: Request, res: Response, next: import("express").NextFunction) => void;
}
