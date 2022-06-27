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
const jwt = require("jsonwebtoken");
let LoginService = class LoginService {
    constructor(USER_REPOSITORY) {
        this.USER_REPOSITORY = USER_REPOSITORY;
    }
    async validateUser(loginDto) {
        const user = await this.USER_REPOSITORY.findOne({ where: { email: loginDto.email } });
        if (!user) {
            throw new common_1.BadRequestException('invalid Email');
        }
        console.log(await bcrypt.compare(loginDto.password, user.password));
        if (await bcrypt.compare(loginDto.password, user.password)) {
        }
        else {
            throw new common_1.BadRequestException('invalid password');
        }
        const jwtToken = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        console.log(jwtToken);
        return { 'JwtToken': jwtToken };
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map