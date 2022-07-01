import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userProvider } from '../../providers/user.providers';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserService, ...userProvider],
  controllers: [UserController],
})
export class UserModule {}
