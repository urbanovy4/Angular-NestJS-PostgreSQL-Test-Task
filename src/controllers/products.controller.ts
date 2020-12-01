import { Controller, Param, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.entity';

@Controller('')
export class ProductsController {

  constructor(
    private productService: ProductService,
  ) {
  }

  @Get('products')
  public async getAllProducts(): Promise<string[] | Product[]> {
    return this.productService.findAll();
  }

  @Get('/product/:id')
  public async getProductById(@Param('id') params: string, @Query('id') id: string) {
    return this.productService.findById(params, id);
  }
}
