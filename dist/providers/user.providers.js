"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productprovider = exports.Passwordprovider = exports.userProvider = void 0;
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
//# sourceMappingURL=user.providers.js.map