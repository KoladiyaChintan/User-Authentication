import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Login } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { LoginSession } from 'src/entities/login-session.entity';
import { JwtHelper } from 'src/utils/jwt.helper';
import { JwtTokenInterface } from 'src/interfaces/jwt.token.interface';

@Injectable()
export class LoginService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly USER_REPOSITORY: typeof Login,
    @Inject('LOGIN_SESSION')
    private readonly LOGIN_SESSION: typeof LoginSession,
    private readonly jwtHelper: JwtHelper,
  ) {}

  /**
   * validate user
   * @param loginDto
   * @returns
   */
  async validateUser(loginDto: LoginUserDto): Promise<any> {
    const user: Login = await this.USER_REPOSITORY.findOne({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new BadRequestException('invalid Email');
    }

    console.log(await bcrypt.compare(loginDto.password, user.password));

    if (await bcrypt.compare(loginDto.password, user.password)) {
    } else {
      throw new BadRequestException('invalid password');
    }

    const TokenDto: JwtTokenInterface = {
      id: user.id,
      email: user.email,
    };

    const jwtToken = await this.jwtHelper.generateToken(TokenDto);

    await this.LOGIN_SESSION.create({
      user_id: user.id,
      jwttoken: jwtToken,
      email: user.email,
    });
    console.log(jwtToken);
    return jwtToken;
  }
}
