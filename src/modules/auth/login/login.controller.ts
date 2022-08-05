import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Login } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
@ApiTags('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiOperation({ summary: 'validate user' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Post()
  async ValidateUser(
    @Body() loginDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    const data: Login = await this.loginService.validateUser(loginDto);

    res.cookie('auth-cookie', data, { httpOnly: true });
    return { massage: 'success' };
    // return data;
  }
}
