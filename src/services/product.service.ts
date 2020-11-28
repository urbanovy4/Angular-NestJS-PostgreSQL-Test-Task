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
  }

  //Get all product
  public async findAll(): Promise<Product[]> {
    try {
      let products = await this.productRepository.find();
      if (products.length === 0) {
        await this.setDefaultValues();
        products = await this.productRepository.find();
      }
      return products;
    } catch (e) {
      return e.message;
    }
  }

  public async setDefaultValues() {
    try {
      const data = await this.productRepository.create(defaultProducts);
      await this.productRepository.save(data);
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
