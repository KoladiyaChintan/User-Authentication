import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
import { UserService } from './user.service';
import { UpdateProfileDto } from '../auth/password/dto/update-profile.dto';
import { Request } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<Login>;
    getAllUser(): Promise<Login[]>;
    getProfile(req: Request): Promise<any>;
    updateProfile(updateProfileDto: UpdateProfileDto, req: Request): Promise<any>;
}
