import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';

import { Product } from '../models/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { defaultProducts } from '../config/default-values';
import { ProductResponse, productToProductResponse } from '../models/productResponse';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    public productRepository: Repository<Product>,
  ) {
  }

  //Get all product
  public async findAll(): Promise<Product[] | string[]> {
    try {
      let products = await this.productRepository.find();
      if (products.length === 0) {
        const data = this.productRepository.create(defaultProducts);
        await this.productRepository.save(data);
        products = await this.productRepository.find();
      }
      return products.map(pr => pr.id);
    } catch (e) {
      return e.message;
    }
  }

  //Get product by id
  public async findById(reqType: string, id: string): Promise<ProductResponse | number | string> {
    try {
      const product = await this.productRepository.findOne({ id });
      if (reqType === 'price' && product) {
        return product.price;
      } else if (reqType === 'info' && product) {
        return productToProductResponse(product);
      } else {
        return 'Type is not valid!';
      }
    } catch (e) {
      return e.message;
    }
  }
}
