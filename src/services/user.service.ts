import { UserRequest } from "../dtos/user.request";
import User from "../models/user.model";
import { userRepository } from "../repositories/user.repository";

class UserService {

    find(): User[] {
        return userRepository.find();
    }

    findById(id: number): User | null {
        return userRepository.findById(id);
    }

    create(user: UserRequest): User {
        const userCreate: User = {
            id: Date.now(),
            name: "Usuario",
            lastName: "Número 1",
            password: "123",
        };
        return userRepository.create(userCreate);
    }

    validateUser(name: string, password: string): User | null {
        const users: User[] = this.find();
        return users.find(user => user.name === name && user.password === password) || null;
    }

    deleteUserById(id: number): boolean {
        const user = this.findById(id);
        if (user) {
            userRepository.delete(id);
            return true;
        }
        return false;
    }
}

export const userService = new UserService();
