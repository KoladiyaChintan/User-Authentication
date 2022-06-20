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