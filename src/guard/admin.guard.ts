import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PasswordHelper } from 'src/utils/password.helper';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtToken: PasswordHelper) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const token = this.jwtToken.getTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException({
        isError: true,
        message: 'Login required',
      });
    }

    const user = await jwt.verify(token, process.env.JWT_SECRET);

    if (!user) {
      throw new UnauthorizedException({
        isError: true,
        message: 'Login required',
      });
    }

    request.user = user;
    return request;
  }
}
