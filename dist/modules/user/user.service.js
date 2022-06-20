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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(USER_REPOSITORY) {
        this.USER_REPOSITORY = USER_REPOSITORY;
    }
    async createUser(createUser) {
        const email = createUser.email;
        const user = await this.USER_REPOSITORY.findOne({ attributes: ['email'], where: { email } });
        if (user && user.email == email) {
            throw new common_1.ConflictException('ACCOUNT ALREADY EXISTS');
        }
        const hashedpassword = await bcrypt.hash(createUser.password, 12);
        try {
            const createdUser = await this.USER_REPOSITORY.create(Object.assign(Object.assign({}, createUser), { password: hashedpassword }));
            createdUser.password = undefined;
            return createdUser;
        }
        catch (error) {
            return error;
        }
    }
    async getUser() {
        return await this.USER_REPOSITORY.findAll();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map