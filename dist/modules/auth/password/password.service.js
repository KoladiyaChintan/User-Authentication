"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordService = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const password_helper_1 = require("../../../utils/password.helper");
const nodemailer = require("nodemailer");
const random = require("random-token");
const dotenv = require("dotenv");
dotenv.config();
let PasswordService = class PasswordService {
    constructor(USER_REPOSITORY, PASS_RESET_REPOSITORY, passwordHelper) {
        this.USER_REPOSITORY = USER_REPOSITORY;
        this.PASS_RESET_REPOSITORY = PASS_RESET_REPOSITORY;
        this.passwordHelper = passwordHelper;
    }
    async changePassword(chnagepasswordDto, req) {
        const currentPassword = chnagepasswordDto.currentpassword;
        const newpassword = chnagepasswordDto.newpassword;
        const bearerHeader = req.headers.authorization.replace('Bearer ', '');
        const jwtData = jwt.verify(bearerHeader, process.env.JWT_SECRET);
        const oldUser = await this.USER_REPOSITORY.findOne({ where: { id: jwtData["id"] } });
        try {
            if (await this.passwordHelper.compare(currentPassword, oldUser.password)) {
                const newEncPassword = await this.passwordHelper.generateSaltAndHash(newpassword);
                const newHashPassword = newEncPassword.passwordHash;
                await this.USER_REPOSITORY.update({ password: newHashPassword }, { where: { id: jwtData["id"] } });
                return { massage: "Password updated successfully" };
            }
        }
        catch (_a) {
            return { message: "this password already exists" };
        }
    }
    async forgotPassword(mailDto) {
        const email = mailDto.email;
        const user = await this.USER_REPOSITORY.findOne({ where: { email } });
        if (user === null) {
            throw new common_1.ConflictException('ACCOUNT_NOT_FOUND');
        }
        if (user) {
            var transporter = nodemailer.createTransport({
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
            let random_token = random(16);
            console.log(random_token);
            const mailOptions = {
                from: process.env.USER_EMAIL,
                to: mailDto.email,
                subject: 'Change Password',
                html: `<h1>Change Password</h1> <a href="http://127.0.0.1:3000/resetpassword/${random_token}">Click here</a>`,
            };
            await this.PASS_RESET_REPOSITORY.create({ userId: user.id, random_Token: random_token });
            await transporter.sendMail(mailOptions, (err, result) => {
                console.log("mail sent");
                if (err) {
                    throw err;
                }
            });
            return { message: `user token :- ${random_token}` };
        }
        else {
            console.log("invalid mail");
            return { message: 'Invalid Email' };
        }
    }
    async resetpassword(token, resetpasswordDto) {
        console.log(token);
        const user = await this.PASS_RESET_REPOSITORY.findOne({ where: { random_Token: token } });
        if (user && user.random_Token == token) {
            const newPassword = resetpasswordDto.newpassword;
            console.log(newPassword);
            const newEncpassword = await this.passwordHelper.generateSaltAndHash(newPassword);
            const newHashPassword = newEncpassword.passwordHash;
            if (await this.passwordHelper.compare(newPassword, newHashPassword)) {
                await this.USER_REPOSITORY.update({ password: newHashPassword }, { where: { id: user['userId'] } });
                return { massage: "password update successfully" };
            }
        }
        else {
            return { massage: 'ACCOUNT NOT FOUND' };
        }
    }
};
PasswordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __param(1, (0, common_1.Inject)('PASS_RESET_REPOSITORY')),
    __metadata("design:paramtypes", [Object, Object, password_helper_1.PasswordHelper])
], PasswordService);
exports.PasswordService = PasswordService;
//# sourceMappingURL=password.service.js.map