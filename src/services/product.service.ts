import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';

import { Product } from '../models/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { defaultProducts } from '../config/default-values';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    public productRepository: Repository<Product>,
  ) {
    const data = this.productRepository.create(defaultProducts);
    this.productRepository.save(data).then(res => res);
  }

  //Get all product
  public async findAll(): Promise<Product[]> {
    try {
      let products = await this.productRepository.find();
      if (products.length === 0) {
        products = await this.productRepository.find();
      }
      return products;
    } catch (e) {
      return e.message;
    }
  }

  //Get product by id
  public async findById(id: string): Promise<Product> {
    try {
      return this.productRepository.findOne({ id });
    } catch (e) {
      return e.message;
    }
  }
}
