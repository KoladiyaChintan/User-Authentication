import { JwtTokenInterface } from 'src/interfaces/jwt.token.interface';
export declare class JwtHelper {
    generateToken(tokenDto: JwtTokenInterface): Promise<string>;
    getTokenFromHeader(request: Request): string;
}
