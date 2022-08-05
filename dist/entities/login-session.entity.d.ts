import { Model } from 'sequelize-typescript';
import { Login } from './user.entity';
export declare class LoginSession extends Model<LoginSession> {
    session_id: string;
    user_id: string;
    email: string;
    jwttoken: string;
    login: Login;
}
