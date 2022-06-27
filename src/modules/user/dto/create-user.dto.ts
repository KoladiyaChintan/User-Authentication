import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    first_name?: string;

    @IsNotEmpty()
    last_name?: string;

    @IsNotEmpty()
    user_name?: string;

    @IsNotEmpty()
    @IsEmail()
    email?: string;

    @IsNotEmpty()
    @MinLength(7)
    password?: string;
}