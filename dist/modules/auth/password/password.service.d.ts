import { ChangePasswordDto, resetPasswordDto } from './dto/changepassword.dto';
import { Login } from 'src/entities/user.entity';
import { PasswordHelper } from 'src/utils/password.helper';
import { Request } from 'express';
import { resetpassword } from '../../../entities/reset-password.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class PasswordService {
    private readonly USER_REPOSITORY;
    private readonly PASS_RESET_REPOSITORY;
    private readonly passwordHelper;
    constructor(USER_REPOSITORY: typeof Login, PASS_RESET_REPOSITORY: typeof resetpassword, passwordHelper: PasswordHelper);
    changePassword(chnagepasswordDto: ChangePasswordDto, req: Request): Promise<any>;
    forgotPassword(mailDto: any): Promise<{
        message: string;
    }>;
    resetpassword(token: string, resetpasswordDto: resetPasswordDto): Promise<any>;
    getProfile(req: any): Promise<any>;
    updateProfile(updateProfileDto: UpdateProfileDto, req: any): Promise<{
        massage: string;
    }>;
}
