import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ChangePasswordDto, resetPasswordDto } from './dto/changepassword.dto';
import * as jwt from 'jsonwebtoken';
import { Login } from 'src/entities/user.entity';
import { PasswordHelper } from 'src/utils/password.helper';
import { Request } from 'express';
import * as nodemailer from 'nodemailer';
import * as random from 'random-token';
import { resetpassword } from '../../../entities/reset-password.entity';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class PasswordService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof Login,
    @Inject('PASS_RESET_REPOSITORY')
    private readonly PASS_RESET_REPOSITORY: typeof resetpassword,
    private readonly passwordHelper: PasswordHelper,
  ) {}

  /**
   * change password
   * @param chnagepasswordDto
   * @param req
   * @returns
   */
  async changePassword(
    chnagepasswordDto: ChangePasswordDto,
    req: Request,
  ): Promise<any> {
    const currentPassword = chnagepasswordDto.currentpassword;
    const newpassword = chnagepasswordDto.newpassword;

    const bearerHeader = req.headers.authorization.replace('Bearer ', '');
    const jwtData = jwt.verify(bearerHeader, process.env.JWT_SECRET);

    const oldUser = await this.USER_REPOSITORY.findOne({
      where: { id: jwtData['id'] },
    });
    try {
      if (
        await this.passwordHelper.compare(currentPassword, oldUser.password)
      ) {
        const newEncPassword = await this.passwordHelper.generateSaltAndHash(
          newpassword,
        );
        const newHashPassword = newEncPassword.passwordHash;
        await this.USER_REPOSITORY.update(
          { password: newHashPassword },
          { where: { id: jwtData['id'] } },
        );
        return { massage: 'Password updated successfully' };
      }
    } catch {
      return { message: 'this password already exists' };
    }
  }

  /**
   * forgot password mail sent
   * @param mailDto
   * @returns
   */
  async forgotPassword(mailDto) {
    const email = mailDto.email;
    const user = await this.USER_REPOSITORY.findOne({ where: { email } });
    if (user === null) {
      throw new ConflictException('ACCOUNT_NOT_FOUND');
    }
    if (user) {
      const transporter = nodemailer.createTransport({
        service: 'yahoo',
        host: 'smtp.mail.yahoo.com',
        port: 465,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASSWORD,
        },
        secure: true,
        logger: true,
        tls: {
          rejectUnauthorized: false,
        },
      });
      const random_token = random(16);
      console.log(random_token);

      const mailOptions = {
        from: process.env.USER_EMAIL,
        to: mailDto.email,
        subject: 'Change Password',
        html: `<h1>Change Password</h1> <a href="http://127.0.0.1:3000/resetpassword/${random_token}">Click here</a>`,
      };

      await this.PASS_RESET_REPOSITORY.create({
        userId: user.id,
        random_Token: random_token,
      });

      await transporter.sendMail(mailOptions, (err) => {
        console.log('mail sent');
        if (err) {
          throw err;
        }
      });
      return { message: `user token :- ${random_token}` };
    } else {
      console.log('invalid mail');
      return { message: 'Invalid Email' };
    }
  }

  /**
   *
   * @param token
   * @param resetpasswordDto
   * @returns
   */
  async resetpassword(
    token: string,
    resetpasswordDto: resetPasswordDto,
  ): Promise<any> {
    console.log(token);
    const user = await this.PASS_RESET_REPOSITORY.findOne({
      where: { random_Token: token },
    });

    if (user && user.random_Token == token) {
      const newPassword = resetpasswordDto.newpassword;
      console.log(newPassword);

      const newEncpassword = await this.passwordHelper.generateSaltAndHash(
        newPassword,
      );
      const newHashPassword = newEncpassword.passwordHash;

      if (await this.passwordHelper.compare(newPassword, newHashPassword)) {
        await this.USER_REPOSITORY.update(
          { password: newHashPassword },
          { where: { id: user['userId'] } },
        );
        return { massage: 'password update successfully' };
      }
    } else {
      return { massage: 'ACCOUNT NOT FOUND' };
    }
  }
}
