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
exports.PasswordController = void 0;
const common_1 = require("@nestjs/common");
const changepassword_dto_1 = require("./dto/changepassword.dto");
const password_service_1 = require("./password.service");
const swagger_1 = require("@nestjs/swagger");
let PasswordController = class PasswordController {
    constructor(passwordService) {
        this.passwordService = passwordService;
    }
    async changePassword(changepasswordDto, req) {
        return await this.passwordService.changePassword(changepasswordDto, req);
    }
    async forgotPassword(maildto) {
        return await this.passwordService.forgotPassword(maildto);
    }
    async resetpassword(token, resetpasswordDto) {
        return await this.passwordService.resetpassword(token, resetpasswordDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'change password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, common_1.Put)('changepassword'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [changepassword_dto_1.ChangePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], PasswordController.prototype, "changePassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'forgot password mail sent' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, common_1.Post)('forgotpassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [changepassword_dto_1.mailDto]),
    __metadata("design:returntype", Promise)
], PasswordController.prototype, "forgotPassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'reset password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, common_1.Post)('resetpassword/:token'),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, changepassword_dto_1.resetPasswordDto]),
    __metadata("design:returntype", Promise)
], PasswordController.prototype, "resetpassword", null);
PasswordController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('password'),
    __metadata("design:paramtypes", [password_service_1.PasswordService])
], PasswordController);
exports.PasswordController = PasswordController;
//# sourceMappingURL=password.controller.js.map