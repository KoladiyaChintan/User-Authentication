import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  first_name?: string;

  @ApiProperty()
  @IsNotEmpty()
  last_name?: string;

  @ApiProperty()
  @IsNotEmpty()
  user_name?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(7)
  password?: string;
}
