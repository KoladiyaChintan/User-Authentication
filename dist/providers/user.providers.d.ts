import { resetpassword } from '../entities/reset-password.entity';
import { Login } from '../entities/user.entity';
export declare const userProvider: {
    provide: string;
    useValue: typeof Login;
}[];
export declare const Passwordprovider: {
    provide: string;
    useValue: typeof resetpassword;
}[];
