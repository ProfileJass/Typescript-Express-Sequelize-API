import { Request, Response } from "express";
export declare class UserController {
    static getAllUsers(req: Request, res: Response): Promise<void>;
    static getUserById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static createUser(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static validateUser(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static deleteUser(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static updateUser(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
