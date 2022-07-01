import { Model } from 'sequelize-typescript';
import { Login } from 'src/entities/user.entity';
export declare class resetpassword extends Model<resetpassword> {
    userId: string;
    random_Token: string;
    user: Login;
}
