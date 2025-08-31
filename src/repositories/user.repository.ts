import User from "../models/user.model";

export class UserRepository {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | null {
    return this.users.find((user) => user.id === id) || null;
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  delete(userIndex: number) {
    this.users.splice(userIndex, 1);
  }

  getUserIndex(id: number): number {
    return this.users.findIndex((user) => user.id === id);
  }
}

export const userRepository = new UserRepository();
