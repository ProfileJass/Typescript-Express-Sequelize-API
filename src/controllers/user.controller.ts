import User from "../models/user.model";
import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { UserRequest } from "../dtos/user.request";
import { ApplicationError } from "../utils/user.error";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users: User[] = await userService.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await userService.findById(id);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { name, lastName, password } = req.body as UserRequest;
      const newUser: User = await userService.create({ name, lastName, password });
      res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }

  static async validateUser(req: Request, res: Response) {
    try {
      const { name, password } = req.body;
      const user = await userService.validateUser(name, password);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const deleted = await userService.deleteUserById(id);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Usuario no encontrado." });
      }
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const userRequest = req.body as Partial<UserRequest>;
      const updatedUser = await userService.updateUser(id, userRequest);
      res.status(200).json(updatedUser);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Ha ocurrido un error inesperado." });
    }
  }
}
