import { Product } from 'src/entities/product.entity';
import { ProductDto } from './dto/product.dto';
export declare class ProductService {
    private PRODUCT_REPOSITORY;
    constructor(PRODUCT_REPOSITORY: typeof Product);
    add(productDto: ProductDto): Promise<Product>;
    get(): Promise<Product[]>;
}
