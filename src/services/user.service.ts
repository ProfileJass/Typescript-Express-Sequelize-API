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
            name: "Jhonatan",
            lastName: "Sierra",
            password: "123",
        };
        return userRepository.create(userCreate);
    }
}

export const userService = new UserService();
