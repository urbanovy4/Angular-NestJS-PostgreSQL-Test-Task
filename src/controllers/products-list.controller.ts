import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.entity';

@Controller('products')
export class ProductsListController {

  constructor(
    private productService: ProductService,
  ) {
  }

  @Get('/pr')
  public async getAllProducts(): Promise<string[] | Product[]> {
    try {
      return await this.productService.findAll();
    } catch (e) {
      return e.message;
    }
  }

  @Get()
  public getAllProductsIds(): Promise<string[] | Product[]> {
    try {
      return this.productService.findAll().then(pr => pr.map(item => item.id));
    } catch (e) {
      return e.message;
    }
  }
}
