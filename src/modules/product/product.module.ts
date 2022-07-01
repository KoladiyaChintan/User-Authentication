import { Module } from '@nestjs/common';
import { Productprovider } from 'src/providers/user.providers';
import { PasswordHelper } from 'src/utils/password.helper';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...Productprovider, PasswordHelper],
})
export class ProductModule {}
