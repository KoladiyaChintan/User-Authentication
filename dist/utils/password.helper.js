"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHelper = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const saltRounds = 10;
let PasswordHelper = class PasswordHelper {
    compare(plainPassword, passwordhash) {
        return new Promise((resolve, reject) => {
            (0, bcrypt_1.compare)(plainPassword, passwordhash, (err, res) => {
                if (res) {
                    resolve(true);
                }
                else {
                    reject(err);
                }
            });
        });
    }
    async generateSaltAndHash(userPassword) {
        const salt = (await this.generateSalt());
        const passwordHash = (await this.hash(userPassword, salt));
        return {
            salt,
            passwordHash,
        };
    }
    generateSalt(round = saltRounds) {
        return new Promise((resolve) => {
            (0, bcrypt_1.genSalt)(round, (err, salt) => {
                if (!err) {
                    resolve(salt);
                }
                else {
                    resolve(null);
                }
            });
        });
    }
    hash(plainPassword, salt) {
        return new Promise((resolve) => {
            (0, bcrypt_1.hash)(plainPassword, salt, (err, hash) => {
                if (err) {
                    resolve(null);
                }
                resolve(hash);
            });
        });
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
PasswordHelper = __decorate([
    (0, common_1.Injectable)()
], PasswordHelper);
exports.PasswordHelper = PasswordHelper;
//# sourceMappingURL=password.helper.js.map