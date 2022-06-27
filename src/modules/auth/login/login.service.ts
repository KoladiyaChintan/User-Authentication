import { BadRequestException, Inject, Injectable, Res } from '@nestjs/common';
import { Login } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoginService {

    constructor(@Inject('USER_REPOSITORY')
    private readonly USER_REPOSITORY: typeof Login) { }

    /**
     * validate user 
     * @param loginDto 
     * @returns 
     */
    async validateUser(loginDto: LoginUserDto): Promise<any> {

        const user: Login = await this.USER_REPOSITORY.findOne({ where: { email: loginDto.email } });
        if (!user) {
            throw new BadRequestException('invalid Email');
        }

        console.log(await bcrypt.compare(loginDto.password, user.password));

        if (await bcrypt.compare(loginDto.password, user.password)) {
        } else {
            throw new BadRequestException('invalid password');
        }

        const jwtToken = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        console.log(jwtToken);
        return { 'JwtToken': jwtToken }
    }
}

