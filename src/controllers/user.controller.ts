import User from "../models/user.model";
import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { UserRequest } from "../dtos/user.request";

export class UserController {
  static getAllUsers(arg0: string, getAllUsers: any) {
    throw new Error("Method not implemented.");
  }
  getAllUsers(req: Request, res: Response) {
    const users: User[] = userService.find();
    res.json(users);
  }

  static getUserById(arg0: string, getUserById: any) {
    throw new Error("Method not implemented.");
  }
  getUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user: User | null = userService.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

  static createUser(arg0: string, createUser: any) {
    throw new Error("Method not impplemented.");
  }
  createUser(req: Request, res: Response) {
    const user: UserRequest = req.body;
    const newUser: User = userService.create(user);
    res.status(201).json(newUser);
  }

  static validateUser(arg0: string, validateUser: any) {
    throw new Error("Method not implemented.");
  }
  validateUser(req: Request, res: Response){
    
  }

  static deleteUser(arg0: string, deleteUser: any){
    throw new Error("Method not implemented.");
  }
  deleteUser(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const deleted = userService.deleteUserById(id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

}
