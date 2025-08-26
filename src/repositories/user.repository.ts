import User from "../models/user.model";

export class UserRepository {
    find(): User[] {
        throw new Error("Method not implemented.");
    }
    private users: User[] = [];

    findById(id: number): User | null {
        return this.users.find(user => user.id === id) || null;
    }

    findAll(): User[] {
        return this.users;
    }

    create(user: User): User {
        this.users.push(user);
        return user;
    }
}

export const userRepository = new UserRepository();
