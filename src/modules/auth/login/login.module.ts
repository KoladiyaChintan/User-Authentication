import { Module } from '@nestjs/common';
import { userProvider } from 'src/providers/user.providers';
import { UserService } from 'src/modules/user/user.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, ...userProvider, UserService],
})
export class LoginModule {}
