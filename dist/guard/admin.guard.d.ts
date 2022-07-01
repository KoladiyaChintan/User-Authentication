import { CanActivate, ExecutionContext } from '@nestjs/common';
import { PasswordHelper } from 'src/utils/password.helper';
export declare class AdminGuard implements CanActivate {
    private readonly jwtToken;
    constructor(jwtToken: PasswordHelper);
    canActivate(context: ExecutionContext): Promise<any>;
}
