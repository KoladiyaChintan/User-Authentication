import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { ProductInterceptor } from 'src/dispatcher/product.interceptor';
import { AdminGuard } from 'src/guard/admin.guard';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseInterceptors(ProductInterceptor)
  @UseGuards(AdminGuard)
  @Post('add')
  async add(@User() productDto: ProductDto) {
    // console.log('user>>>>>>>>>>>>', user);
    const data = await this.productService.add(productDto);
    return { data };
  }

  @Get()
  async get() {
    return await this.productService.get();
  }
}
