import User from "../models/user.model";
import { Request, Response } from "express";
import { userService } from "../services/user.service";

export class UserController {
    static getAllUsers(arg0: string, getAllUsers: any) {
        throw new Error('Method not implemented.');
    }
    getAllUsers(req: Request, res: Response) {
        const users: User[] = userService.find();
        res.json(users);
    }
}