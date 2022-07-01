import { Model } from 'sequelize-typescript';
export declare class Product extends Model<Product> {
    id: string;
    productname: string;
    productcategory: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
