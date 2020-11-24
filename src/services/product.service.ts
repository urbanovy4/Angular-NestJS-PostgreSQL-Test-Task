import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';

import { Product } from '../models/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    public productRepository: Repository<Product>,
  ) {
  }

  //Get all product
  public async findAll(): Promise<Product[]> {
    try {
      return await this.productRepository.find();
    } catch (e) {
      return e.message;
    }
  }

  //Get product by id
  public async findById(id: string): Promise<Product> {
    try {
      return await this.productRepository.findOne({ id });
    } catch (e) {
      return e.message;
    }
  }


}
