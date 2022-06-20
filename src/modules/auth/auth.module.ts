import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { PasswordModule } from './password/password.module';

@Module({
  controllers: [],
  providers: [],
  imports: [LoginModule, PasswordModule],

})
export class AuthModule { }
