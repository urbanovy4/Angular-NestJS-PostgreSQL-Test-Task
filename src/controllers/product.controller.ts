import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.entity';


@Controller('/product')
export class ProductController {

  constructor(
    private productService: ProductService,
  ) {
  }

  @Get(':id')
  public async getProductById(@Param() params, @Query() query) {
    try {
      if (params.id === 'info') {
        const product: Product = await this.productService.findById(query.id);
        delete product.price;
        return product;
      }
      return this.productService.findById(query.id)
        .then(res => res.price);
    } catch (e) {
      return e.messages;
    }
  }

}
