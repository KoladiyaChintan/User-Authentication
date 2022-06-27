import { Body, Controller, Get, Param, Post, Put, Req } from "@nestjs/common";
import { ChangePasswordDto, mailDto, resetPasswordDto } from "./dto/changepassword.dto";
import { PasswordService } from "./password.service";
import { Request } from "express";

@Controller()
export class PasswordController {
    constructor(private readonly passwordService: PasswordService) { }

    @Put('changepassword')
    async changePassword(@Body() changepasswordDto: ChangePasswordDto, @Req() req: Request): Promise<any> {
        return await this.passwordService.changePassword(changepasswordDto, req)
    }

    @Post('forgotpassword')
    async forgotPassword(@Body() mailDto: mailDto): Promise<any> {
        return await this.passwordService.forgotPassword(mailDto)
    }

    @Post('resetpassword/:token')
    async resetpassword(@Param('token') token: string, @Body() resetpasswordDto: resetPasswordDto,): Promise<any> {
        return await this.passwordService.resetpassword(token, resetpasswordDto);
    }
}
