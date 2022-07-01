"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordModule = void 0;
const common_1 = require("@nestjs/common");
const user_providers_1 = require("../../../providers/user.providers");
const user_service_1 = require("../../user/user.service");
const password_helper_1 = require("../../../utils/password.helper");
const password_controller_1 = require("./password.controller");
const password_service_1 = require("./password.service");
let PasswordModule = class PasswordModule {
};
PasswordModule = __decorate([
    (0, common_1.Module)({
        controllers: [password_controller_1.PasswordController],
        providers: [
            password_service_1.PasswordService,
            user_service_1.UserService,
            ...user_providers_1.userProvider,
            password_helper_1.PasswordHelper,
            ...user_providers_1.Passwordprovider,
        ],
    })
], PasswordModule);
exports.PasswordModule = PasswordModule;
//# sourceMappingURL=password.module.js.map