import { ChangePasswordDto, mailDto, resetPasswordDto } from "./dto/changepassword.dto";
import { PasswordService } from "./password.service";
import { Request } from "express";
import { UpdateProfileDto } from "./dto/update-profile.dto";
export declare class PasswordController {
    private readonly passwordService;
    constructor(passwordService: PasswordService);
    changePassword(password: ChangePasswordDto, req: Request): Promise<any>;
    forgotPassword(mailDto: mailDto): Promise<any>;
    resetpassword(token: string, resetpasswordDto: resetPasswordDto): Promise<any>;
    getProfile(req: Request): Promise<any>;
    updateProfile(updateProfileDto: UpdateProfileDto, req: Request): Promise<any>;
}
