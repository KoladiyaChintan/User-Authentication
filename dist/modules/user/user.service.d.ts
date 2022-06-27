import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
import { UpdateProfileDto } from '../auth/password/dto/update-profile.dto';
export declare class UserService {
    private readonly USER_REPOSITORY;
    constructor(USER_REPOSITORY: typeof Login);
    createUser(createUserDto: CreateUserDto): Promise<Login>;
    getAllUser(): Promise<Login[]>;
    getProfile(req: any): Promise<any>;
    updateProfile(updateProfileDto: UpdateProfileDto, req: any): Promise<any>;
}
