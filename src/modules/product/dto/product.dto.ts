import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class ProductDto {
  @ApiProperty()
  @IsNotEmpty()
  productname?: string;

  @ApiProperty()
  @IsNotEmpty()
  productcategory?: string;

  @ApiProperty()
  @IsNotEmpty()
  description?: string;
}
