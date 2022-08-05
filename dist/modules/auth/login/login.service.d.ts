import { Login } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login.dto';
import { LoginSession } from 'src/entities/login-session.entity';
import { JwtHelper } from 'src/utils/jwt.helper';
export declare class LoginService {
    private readonly USER_REPOSITORY;
    private readonly LOGIN_SESSION;
    private readonly jwtHelper;
    constructor(USER_REPOSITORY: typeof Login, LOGIN_SESSION: typeof LoginSession, jwtHelper: JwtHelper);
    validateUser(loginDto: LoginUserDto): Promise<any>;
}
