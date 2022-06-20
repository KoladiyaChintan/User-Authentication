import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    /** create a new user */
    @Post('/create')
    async createUser(@Body() createUser: CreateUserDto) {
        const user = await this.userService.createUser(createUser);
        return user;
    }

    /** Get All user */
    @Get('/get')
    async getAllUser(): Promise<Login[]> {
        return await this.userService.getUser()
    }
}
