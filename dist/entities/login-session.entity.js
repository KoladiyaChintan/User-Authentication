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
exports.LoginSession = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("./user.entity");
let LoginSession = class LoginSession extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], LoginSession.prototype, "session_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.Login),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
    }),
    __metadata("design:type", String)
], LoginSession.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], LoginSession.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], LoginSession.prototype, "jwttoken", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.Login),
    __metadata("design:type", user_entity_1.Login)
], LoginSession.prototype, "login", void 0);
LoginSession = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'LoginSession',
    })
], LoginSession);
exports.LoginSession = LoginSession;
//# sourceMappingURL=login-session.entity.js.map