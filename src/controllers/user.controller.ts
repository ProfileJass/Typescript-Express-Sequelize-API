import User from "../models/user.model";
import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { UserRequest } from "../dtos/user.request";
import { ApplicationError } from "../utils/user.error";

export class UserController {
  static getAllUsers(req: Request, res: Response) {
    const users: User[] = userService.findAll();
    res.json(users);
  }

  static getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = userService.findById(id);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }

  static createUser(req: Request, res: Response) {
    try {
      const { name, lastName, password } = req.body as UserRequest;
      const newUser: User = userService.create({ name, lastName, password });
      res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }

  static validateUser(req: Request, res: Response) {
    try {
      const { name, password } = req.body;
      const user = userService.validateUser(name, password);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }

  static deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      userService.deleteUserById(id);
      res.status(204).send();
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }
}
