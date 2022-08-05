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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_helper_1 = require("../../../utils/jwt.helper");
let LoginService = class LoginService {
    constructor(USER_REPOSITORY, LOGIN_SESSION, jwtHelper) {
        this.USER_REPOSITORY = USER_REPOSITORY;
        this.LOGIN_SESSION = LOGIN_SESSION;
        this.jwtHelper = jwtHelper;
    }
    async validateUser(loginDto) {
        const user = await this.USER_REPOSITORY.findOne({
            where: { email: loginDto.email },
        });
        if (!user) {
            throw new common_1.BadRequestException('invalid Email');
        }
        console.log(await bcrypt.compare(loginDto.password, user.password));
        if (await bcrypt.compare(loginDto.password, user.password)) {
        }
        else {
            throw new common_1.BadRequestException('invalid password');
        }
        const TokenDto = {
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
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __param(1, (0, common_1.Inject)('LOGIN_SESSION')),
    __metadata("design:paramtypes", [Object, Object, jwt_helper_1.JwtHelper])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map