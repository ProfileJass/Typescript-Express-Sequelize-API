import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    id: number;
    name: string;
    lastName: string;
    password: string;
}
export default User;
