import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductInterceptor } from 'src/dispatcher/product.interceptor';
import { AdminGuard } from 'src/guard/admin.guard';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseInterceptors(ProductInterceptor)
  @UseGuards(AdminGuard)
  @ApiOperation({ summary: 'add product' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Post('add')
  async add(@Body() productDto: ProductDto) {
    // console.log('user>>>>>>>>>>>>', user);
    const data = await this.productService.add(productDto);
    return { data };
  }

  @ApiOperation({ summary: 'get all products' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Get()
  async get() {
    return await this.productService.get();
  }
}
