"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const reset_password_entity_1 = require("../../entities/reset-password.entity");
const user_entity_1 = require("../../entities/user.entity");
const constants_1 = require("../constants");
const database_config_1 = require("./database.config");
exports.databaseProviders = [{
        provide: constants_1.SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case constants_1.DEVELOPMENT:
                    config = database_config_1.databaseConfig.development;
                    break;
                case constants_1.TEST:
                    config = database_config_1.databaseConfig.test;
                    break;
                case constants_1.PRODUCTION:
                    config = database_config_1.databaseConfig.production;
                    break;
                default:
                    config = database_config_1.databaseConfig.development;
            }
            const sequelize = new sequelize_typescript_1.Sequelize(config);
            sequelize.addModels([
                user_entity_1.Login,
                reset_password_entity_1.resetpassword
            ]);
            await sequelize.sync();
            return sequelize;
        },
    }];
//# sourceMappingURL=database.providers.js.map