import { LoginSession } from 'src/entities/login-session.entity';
import { Product } from 'src/entities/product.entity';
import { resetpassword } from '../entities/reset-password.entity';
import { Login } from '../entities/user.entity';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: Login,
  },
];

export const Passwordprovider = [
  {
    provide: 'PASS_RESET_REPOSITORY',
    useValue: resetpassword,
  },
];

export const Productprovider = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];

export const SessionProvider = [
  {
    provide: 'LOGIN_SESSION',
    useValue: LoginSession,
  },
];
