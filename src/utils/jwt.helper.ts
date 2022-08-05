import { Injectable } from '@nestjs/common';
import { JwtTokenInterface } from 'src/interfaces/jwt.token.interface';
import * as jwt from 'jsonwebtoken';
import { LoginSession } from 'src/entities/login-session.entity';
import { Login } from 'src/entities/user.entity';

@Injectable()
export class JwtHelper {
  public async generateToken(tokenDto: JwtTokenInterface) {
    const token = jwt.sign(tokenDto, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE_TIME,
    });
    return token;
  }

  public async getTokenFromHeader(request: Request): Promise<string> {
    let token =
      request.headers['x-access-token'] || request.headers['authorization'];

    if (Array.isArray(token)) {
      token = token[0];
    }

    if (token && token.startsWith('Bearer ')) {
      // Remove Bearer from string
      return (token = token.slice(7, token.length));
    }
    return token;
  }

  public async verify(token: string): Promise<any> {
    try {
      jwt.verify(token, process.env.JWT_SECRET) as JwtTokenInterface;
      const session = await LoginSession.findOne({
        where: { jwttoken: token },
        include: [
          {
            attributes: ['email', 'first_name', 'last_name', 'user_name'],
            model: Login,
            required: true,
          },
        ],
      });
      if (!session) {
        return false;
      }
      return session.login;
    } catch (e) {
      console.log(e);
      return { msg: 'fail' };
    }
  }
}
