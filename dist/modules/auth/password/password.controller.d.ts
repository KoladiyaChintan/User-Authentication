import { ChangePasswordDto, mailDto, resetPasswordDto } from './dto/changepassword.dto';
import { PasswordService } from './password.service';
import { Request } from 'express';
export declare class PasswordController {
    private readonly passwordService;
    constructor(passwordService: PasswordService);
    changePassword(changepasswordDto: ChangePasswordDto, req: Request): Promise<any>;
    forgotPassword(maildto: mailDto): Promise<any>;
    resetpassword(token: string, resetpasswordDto: resetPasswordDto): Promise<any>;
}
