import { Model } from 'sequelize-typescript';
export declare class Login extends Model<Login> {
    id: string;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    password: string;
    rows: any;
}
