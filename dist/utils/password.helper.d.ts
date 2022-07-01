export interface help {
    salt: string;
    passwordHash: string;
}
export declare class PasswordHelper {
    compare(plainPassword: string, passwordhash: string): Promise<object | boolean>;
    generateSaltAndHash(userPassword: string): Promise<help>;
    generateSalt(round?: number): Promise<string | null>;
    hash(plainPassword: string, salt: string): Promise<string>;
    getTokenFromHeader(request: Request): string;
}
