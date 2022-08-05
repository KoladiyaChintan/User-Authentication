import { Module } from '@nestjs/common';
import { Passwordprovider, userProvider } from 'src/providers/user.providers';
import { UserService } from 'src/modules/user/user.service';
import { PasswordHelper } from 'src/utils/password.helper';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';
import { JwtHelper } from 'src/utils/jwt.helper';

@Module({
  controllers: [PasswordController],
  providers: [
    PasswordService,
    UserService,
    ...userProvider,
    PasswordHelper,
    ...Passwordprovider,
    JwtHelper,
  ],
})
export class PasswordModule {}
