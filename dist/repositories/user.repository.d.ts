import User from "../models/user.model";
export declare class UserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    create(userData: Partial<User>): Promise<User>;
    update(id: number, userData: Partial<User>): Promise<User | null>;
    delete(id: number): Promise<boolean>;
    findByName(name: string): Promise<User[]>;
}
export declare const userRepository: UserRepository;
