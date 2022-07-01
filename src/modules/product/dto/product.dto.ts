import { IsNotEmpty } from 'class-validator';
export class ProductDto {
  @IsNotEmpty()
  productname?: string;
  @IsNotEmpty()
  productcategory?: string;
  @IsNotEmpty()
  description?: string;
}
