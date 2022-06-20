import { Login } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login.dto';
export declare class LoginService {
    private readonly USER_REPOSITORY;
    constructor(USER_REPOSITORY: typeof Login);
    validateUser(loginDto: LoginUserDto): Promise<any>;
}
