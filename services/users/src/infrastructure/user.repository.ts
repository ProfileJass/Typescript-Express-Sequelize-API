import User from "../domain/user.model";

export class UserRepository {
  async findAll(): Promise<User[]> {
    return await User.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }

  async create(userData: Partial<User>): Promise<User> {
    return await User.create(userData);
  }

  async update(id: number, userData: Partial<User>): Promise<User | null> {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(userData);
      return user;
    }
    return null;
  }

  async delete(id: number): Promise<boolean> {
    const deletedRows = await User.destroy({
      where: { id }
    });
    return deletedRows > 0;
  }

  async findByName(name: string): Promise<User[]> {
    return await User.findAll({
      where: { name }
    });
  }
}

export const userRepository = new UserRepository();
