import { UserRequest } from "./dto/user.request";
import User from "../domain/user.model";
declare class UserService {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    create(userRequest: UserRequest): Promise<User>;
    validateUser(name: string, password: string): Promise<User | null>;
    deleteUserById(id: number): Promise<boolean>;
    updateUser(id: number, userRequest: Partial<UserRequest>): Promise<User>;
}
export declare const userService: UserService;
export {};
