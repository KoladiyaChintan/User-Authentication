import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUser: CreateUserDto): Promise<any>;
    getAllUser(): Promise<Login[]>;
}
