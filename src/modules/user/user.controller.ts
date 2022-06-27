import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
import { UserService } from './user.service';
import { UpdateProfileDto } from '../auth/password/dto/update-profile.dto';
import { Request } from "express";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<Login> {
        return await this.userService.createUser(createUserDto);
    }

    @Get('getall')
    async getAllUser(): Promise<Login[]> {
        return await this.userService.getAllUser()
    }

    @Get('getprofile')
    async getProfile(@Req() req: Request): Promise<any> {
        return await this.userService.getProfile(req);
    }

    @Put('updateprofile')
    async updateProfile(@Body() updateProfileDto: UpdateProfileDto, @Req() req: Request): Promise<any> {
        return await this.userService.updateProfile(updateProfileDto, req);
    }
}
