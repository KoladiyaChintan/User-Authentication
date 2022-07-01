import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private PRODUCT_REPOSITORY: typeof Product,
  ) {}

  async add(productDto: ProductDto) {
    const data = await this.PRODUCT_REPOSITORY.create(productDto);
    return data;
  }

  async get() {
    return await this.PRODUCT_REPOSITORY.findAll();
  }
}
