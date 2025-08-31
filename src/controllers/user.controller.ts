import User from "../models/user.model";
import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { UserRequest } from "../dtos/user.request";

export class UserController {
  static getAllUsers(req: Request, res: Response) {
    const users: User[] = userService.findAll();
    res.json(users);
  }

  static getUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user: User | null = userService.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

  static createUser(req: Request, res: Response) {
    const user: UserRequest = req.body;
    const newUser: User = userService.create(user);
    res.status(201).json(newUser);
  }

  static validateUser(req: Request, res: Response){
    const user: UserRequest = req.body;
    const isValid = userService.validateUser(user.name, user.password);
    if (isValid) {
      res.status(200).json({ message: "User is valid" });
    } else {
      res.status(400).json({ message: "User is invalid" });
    }
  }

  static deleteUser(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const deleted = userService.deleteUserById(id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

}
