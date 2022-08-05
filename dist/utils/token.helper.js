"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtHelper = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let JwtHelper = class JwtHelper {
    async generateToken(tokenDto) {
        const token = jwt.sign(tokenDto, process.env.JWT_SECRET, {
            expiresIn: '500s',
        });
        return token;
    }
    getTokenFromHeader(request) {
        let token = request.headers['x-access-token'] || request.headers['authorization'];
        if (Array.isArray(token)) {
            token = token[0];
        }
        if (token && token.startsWith('Bearer ')) {
            return (token = token.slice(7, token.length));
        }
        return token;
    }
};
JwtHelper = __decorate([
    (0, common_1.Injectable)()
], JwtHelper);
exports.JwtHelper = JwtHelper;
//# sourceMappingURL=token.helper.js.map