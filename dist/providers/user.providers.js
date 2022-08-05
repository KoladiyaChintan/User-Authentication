"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionProvider = exports.Productprovider = exports.Passwordprovider = exports.userProvider = void 0;
const login_session_entity_1 = require("../entities/login-session.entity");
const product_entity_1 = require("../entities/product.entity");
const reset_password_entity_1 = require("../entities/reset-password.entity");
const user_entity_1 = require("../entities/user.entity");
exports.userProvider = [
    {
        provide: 'USER_REPOSITORY',
        useValue: user_entity_1.Login,
    },
];
exports.Passwordprovider = [
    {
        provide: 'PASS_RESET_REPOSITORY',
        useValue: reset_password_entity_1.resetpassword,
    },
];
exports.Productprovider = [
    {
        provide: 'PRODUCT_REPOSITORY',
        useValue: product_entity_1.Product,
    },
];
exports.SessionProvider = [
    {
        provide: 'LOGIN_SESSION',
        useValue: login_session_entity_1.LoginSession,
    },
];
//# sourceMappingURL=user.providers.js.map