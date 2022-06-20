import { BadRequestException, Inject, Injectable, Res } from '@nestjs/common';
import { Login } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoginService {

    constructor(@Inject('USER_REPOSITORY')
    private readonly USER_REPOSITORY: typeof Login) { }

    /** Validate User  */
    async validateUser(loginDto: LoginUserDto): Promise<any> {

        /** Check User Email */
        const user: Login = await this.USER_REPOSITORY.findOne({ where: { email: loginDto.email } });
        if (!user) {
            throw new BadRequestException('invalid Email');
        }

        /** check password */
        console.log(await bcrypt.compare(loginDto.password, user.password));

        if (await bcrypt.compare(loginDto.password, user.password)) {
        } else {
            return "Invalid password";
        }

        /** generate jwt token from id */
        const jwtToken = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        console.log(jwtToken);
        return { 'JwtToken': jwtToken }
    }
}

