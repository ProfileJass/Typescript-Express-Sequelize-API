import { UserRequest } from "../dtos/user.request";
import User from "../models/user.model";
import { userRepository } from "../repositories/user.repository";

class UserService {

    findAll(): User[] {
        return userRepository.findAll();
    }

    findById(id: number): User | null {
        return userRepository.findById(id);
    }

    create(user: UserRequest): User {
        const userCreate: User = {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            password: user.password,
        };
        return userRepository.create(userCreate);
    }

    validateUser(name: string, password: string): User | null {
        const users: User[] = this.findAll();
        return users.find(user => user.name === name && user.password === password) || null;
    }

    deleteUserById(id: number): boolean {
        const user = this.findById(id);
        if (user) {
            userRepository.delete(userRepository.getUserIndex(id));
            return true;
        }
        return false;
    }
}

export const userService = new UserService();
