import { Body, Controller, Post } from '@nestjs/common';
import { Login } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    /** Check user */
    @Post()
    async ValidateUser(@Body() loginDto: LoginUserDto): Promise<any> {
        const data: Login = await this.loginService.validateUser(loginDto)
        return data;
    }
}