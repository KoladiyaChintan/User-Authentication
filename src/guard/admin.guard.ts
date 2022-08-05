import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtHelper } from 'src/utils/jwt.helper';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtHelper: JwtHelper) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const token = await this.jwtHelper.getTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException({
        isError: true,
        message: 'Login required',
      });
    }

    const user = await this.jwtHelper.verify(token);

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
