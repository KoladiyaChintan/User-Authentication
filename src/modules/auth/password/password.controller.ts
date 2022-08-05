import { Body, Controller, Param, Post, Put, Req } from '@nestjs/common';
import {
  ChangePasswordDto,
  mailDto,
  resetPasswordDto,
} from './dto/changepassword.dto';
import { PasswordService } from './password.service';
import { Request } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @ApiOperation({ summary: 'change password' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Put('changepassword')
  async changePassword(
    @Body() changepasswordDto: ChangePasswordDto,
    @Req() req: Request,
  ): Promise<any> {
    return await this.passwordService.changePassword(changepasswordDto, req);
  }

  @ApiOperation({ summary: 'forgot password mail sent' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Post('forgotpassword')
  async forgotPassword(@Body() maildto: mailDto): Promise<any> {
    return await this.passwordService.forgotPassword(maildto);
  }

  @ApiOperation({ summary: 'reset password' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Post('resetpassword/:token')
  async resetpassword(
    @Param('token') token: string,
    @Body() resetpasswordDto: resetPasswordDto,
  ): Promise<any> {
    return await this.passwordService.resetpassword(token, resetpasswordDto);
  }
}
