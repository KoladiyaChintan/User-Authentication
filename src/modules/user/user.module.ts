import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userProvider } from '../../providers/user.providers';
import { UserService } from './user.service';
import { JwtHelper } from 'src/utils/jwt.helper';

@Module({
  providers: [UserService, ...userProvider, JwtHelper],
  controllers: [UserController],
})
export class UserModule {}
