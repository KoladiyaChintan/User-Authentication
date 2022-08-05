import { Sequelize } from 'sequelize-typescript';
import { LoginSession } from 'src/entities/login-session.entity';
import { Product } from 'src/entities/product.entity';
import { resetpassword } from 'src/entities/reset-password.entity';
import { Login } from 'src/entities/user.entity';
// import DatabaseSeeder from './seeder/index';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
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

      sequelize.addModels([Login, resetpassword, Product, LoginSession]);

      await sequelize.sync({ force: true });
      //   .then(async () => {
      //     return await DatabaseSeeder.run();
      //   })
      //   .then(() => {
      //     console.log('********** Successfully seeded db **********');
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     console.log('********** Error in database sedding **********');
      //   });

      return sequelize;
    },
  },
];
