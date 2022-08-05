import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtHelper } from 'src/utils/jwt.helper';
export declare class AdminGuard implements CanActivate {
    private readonly jwtHelper;
    constructor(jwtHelper: JwtHelper);
    canActivate(context: ExecutionContext): Promise<any>;
}
