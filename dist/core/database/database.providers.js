"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const login_session_entity_1 = require("../../entities/login-session.entity");
const product_entity_1 = require("../../entities/product.entity");
const reset_password_entity_1 = require("../../entities/reset-password.entity");
const user_entity_1 = require("../../entities/user.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                password: process.env.DB_PASS,
                username: process.env.DB_USER,
                database: process.env.DATABASE_NAME,
                logging: false,
                pool: {
                    max: 100,
                    min: 0,
                    acquire: 30000,
                    idle: 5000,
                },
            });
            sequelize.addModels([user_entity_1.Login, reset_password_entity_1.resetpassword, product_entity_1.Product, login_session_entity_1.LoginSession]);
            await sequelize.sync({ force: true });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map