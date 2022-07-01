import { IsEmail, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty()
  currentpassword: string;

  @IsNotEmpty()
  newpassword: string;
}

export class mailDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class resetPasswordDto {
  @IsNotEmpty()
  newpassword: string;
}
