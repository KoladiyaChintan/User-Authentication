import { Module } from '@nestjs/common';
import { SessionProvider, userProvider } from 'src/providers/user.providers';
import { UserService } from 'src/modules/user/user.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtHelper } from 'src/utils/jwt.helper';

@Module({
  controllers: [LoginController],
  providers: [
    LoginService,
    UserService,
    JwtHelper,
    ...SessionProvider,
    ...userProvider,
  ],
})
export class LoginModule {}
