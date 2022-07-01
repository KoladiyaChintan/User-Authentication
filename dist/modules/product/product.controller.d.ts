import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    add(productDto: ProductDto): Promise<{
        data: import("../../entities/product.entity").Product;
    }>;
    get(): Promise<import("../../entities/product.entity").Product[]>;
}
