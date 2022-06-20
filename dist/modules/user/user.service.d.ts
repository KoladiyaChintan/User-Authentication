import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
export declare class UserService {
    private readonly USER_REPOSITORY;
    constructor(USER_REPOSITORY: typeof Login);
    createUser(createUser: CreateUserDto): Promise<any>;
    getUser(): Promise<Login[]>;
}
