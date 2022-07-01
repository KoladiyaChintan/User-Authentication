import { ChangePasswordDto, resetPasswordDto, mailDto } from './dto/changepassword.dto';
import { PasswordService } from './password.service';
import { Request } from 'express';
export declare class PasswordController {
    private readonly passwordService;
    constructor(passwordService: PasswordService);
    changePassword(changepasswordDto: ChangePasswordDto, req: Request): Promise<any>;
    forgotPassword(mailDto: mailDto): Promise<any>;
    resetpassword(token: string, resetpasswordDto: resetPasswordDto): Promise<any>;
}
