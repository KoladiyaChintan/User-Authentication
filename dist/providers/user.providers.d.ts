import { LoginSession } from 'src/entities/login-session.entity';
import { Product } from 'src/entities/product.entity';
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
export declare const Productprovider: {
    provide: string;
    useValue: typeof Product;
}[];
export declare const SessionProvider: {
    provide: string;
    useValue: typeof LoginSession;
}[];
