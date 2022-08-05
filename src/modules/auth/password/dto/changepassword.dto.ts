import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  currentpassword: string;

  @ApiProperty()
  @IsNotEmpty()
  newpassword: string;
}

export class mailDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class resetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  newpassword: string;
}
