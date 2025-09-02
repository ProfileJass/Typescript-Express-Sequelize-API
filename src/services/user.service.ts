import { UserRequest } from "../dtos/user.request";
import User from "../models/user.model";
import { userRepository } from "../repositories/user.repository";
import {
  ApplicationError,
  BadRequestError,
  NotFoundError,
} from "../utils/user.error";

class UserService {
  findAll(): User[] {
    return userRepository.findAll();
  }

  findById(id: number): User {
    if (isNaN(id)) {
      throw new BadRequestError("Formato de ID inválido.");
    }
    const user = userRepository.findById(id);
    if (!user) {
      throw new NotFoundError("Usuario no encontrado.");
    }
    return user;
  }

  create(user: UserRequest): User {
    const userCreate: User = {
      id: Date.now(),
      name: user.name,
      lastName: user.lastName,
      password: user.password,
    };
    if (!userCreate.name || !userCreate.password || !userCreate.lastName) {
      throw new BadRequestError(
        "Nombre, apellido y contraseña son requeridos."
      );
    }
    return userRepository.create(userCreate);
  }

  validateUser(name: string, password: string): User | null {
    if (!name || !password) {
      throw new BadRequestError("Nombre y contraseña son requeridos.");
    }
    const user = userRepository
      .findAll()
      .find((user) => user.name === name && user.password === password);
    if (!user) {
      throw new NotFoundError("Usuario no encontrado.");
    }
    return user;
  }

  deleteUserById(id: number): boolean {
    const user = this.findById(id);
    if (!user) {
      throw new NotFoundError("Usuario no encontrado.");
    }
    userRepository.delete(userRepository.getUserIndex(id));
    return true;
  }
}

export const userService = new UserService();
