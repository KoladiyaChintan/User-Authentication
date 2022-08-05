import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
import { UserService } from './user.service';
import { UpdateProfileDto } from '../auth/password/dto/update-profile.dto';
import { Request } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'create new user' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<Login> {
    return await this.userService.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Get('getall')
  async getAllUser(): Promise<Login[]> {
    return await this.userService.getAllUser();
  }

  @ApiOperation({ summary: 'get user profile' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Get('getprofile')
  async getProfile(@Req() req: Request): Promise<any> {
    return await this.userService.getProfile(req);
  }

  @ApiOperation({ summary: ' update user profile' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Put('updateprofile')
  async updateProfile(
    @Body() updateProfileDto: UpdateProfileDto,
    @Req() req: Request,
  ): Promise<any> {
    return await this.userService.updateProfile(updateProfileDto, req);
  }
}
