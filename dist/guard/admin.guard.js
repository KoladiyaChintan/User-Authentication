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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGuard = void 0;
const common_1 = require("@nestjs/common");
const password_helper_1 = require("../utils/password.helper");
const jwt = require("jsonwebtoken");
let AdminGuard = class AdminGuard {
    constructor(jwtToken) {
        this.jwtToken = jwtToken;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.jwtToken.getTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException({
                isError: true,
                message: 'Login required',
            });
        }
        const user = await jwt.verify(token, process.env.JWT_SECRET);
        if (!user) {
            throw new common_1.UnauthorizedException({
                isError: true,
                message: 'Login required',
            });
        }
        request.user = user;
        return request;
    }
};
AdminGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [password_helper_1.PasswordHelper])
], AdminGuard);
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=admin.guard.js.map