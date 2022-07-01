import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './core/database/database.module';
import { Loggermiddleware } from './middleware/logger.middleware';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [UserModule, AuthModule, DatabaseModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Loggermiddleware).forRoutes('login');
  }
}
