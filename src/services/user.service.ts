import { UserRequest } from "../dtos/user.request";
import User from "../models/user.model";
import { userRepository } from "../repositories/user.repository";
import {
  ApplicationError,
  BadRequestError,
  NotFoundError,
} from "../utils/user.error";

class UserService {
  async findAll(): Promise<User[]> {
    return await userRepository.findAll();
  }

  async findById(id: number): Promise<User> {
    if (isNaN(id)) {
      throw new BadRequestError("Formato de ID inválido.");
    }
    const user = await userRepository.findById(id);
    if (!user) {
      throw new NotFoundError("Usuario no encontrado.");
    }
    return user;
  }

  async create(userRequest: UserRequest): Promise<User> {
    if (!userRequest.name || !userRequest.password || !userRequest.lastName) {
      throw new BadRequestError(
        "Nombre, apellido y contraseña son requeridos."
      );
    }
    
    return await userRepository.create({
      name: userRequest.name,
      lastName: userRequest.lastName,
      password: userRequest.password,
    });
  }

  async validateUser(name: string, password: string): Promise<User | null> {
    if (!name || !password) {
      throw new BadRequestError("Nombre y contraseña son requeridos.");
    }
    
    const users = await userRepository.findByName(name);
    const user = users.find(user => user.password === password);
    
    if (!user) {
      throw new NotFoundError("Usuario no encontrado.");
    }
    return user;
  }

  async deleteUserById(id: number): Promise<boolean> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundError("Usuario no encontrado.");
    }
    
    return await userRepository.delete(id);
  }

  async updateUser(id: number, userRequest: Partial<UserRequest>): Promise<User> {
    const user = await userRepository.update(id, userRequest);
    if (!user) {
      throw new NotFoundError("Usuario no encontrado.");
    }
    return user;
  }
}

export const userService = new UserService();
