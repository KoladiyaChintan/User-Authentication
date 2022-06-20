import { IsEmail, isEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto{

    @IsNotEmpty()
    name?:string;

    @IsNotEmpty()
    @IsEmail()
    email?:string;

    @IsNotEmpty()
    password?:string;
}