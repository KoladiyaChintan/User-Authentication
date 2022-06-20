import { Body, Controller, Get, Param, Post, Put, Req } from "@nestjs/common";
import { ChangePasswordDto, mailDto, resetPasswordDto } from "./dto/changepassword.dto";
import { PasswordService } from "./password.service";
import { Request } from "express";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Controller()
export class PasswordController {
    constructor(private readonly passwordService: PasswordService) { }

    @Put('changepassword')
    async changePassword(@Body() password: ChangePasswordDto, @Req() req: Request): Promise<any> {
        return await this.passwordService.changePassword(password, req)
    }

    @Post('forgotpassword')
    async forgotPassword(@Body() mailDto: mailDto): Promise<any> {
        return await this.passwordService.forgotPassword(mailDto)
    }

    @Post('resetpassword/:token')
    async resetpassword(@Param('token') token: string, @Body() resetpasswordDto: resetPasswordDto,): Promise<any> {
        return await this.passwordService.resetpassword(token, resetpasswordDto);
    }

    @Get('getprofile')
    async getProfile(@Req() req: Request): Promise<any> {
        return await this.passwordService.getProfile(req);
    }

    @Put('updateprofile')
    async updateProfile(@Body() updateProfileDto: UpdateProfileDto, @Req() req: Request): Promise<any> {
        return await this.passwordService.updateProfile(updateProfileDto, req);
    }
}
