import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { ProductService } from './services/product.service';
import { ProductsListController } from './controllers/products-list.controller';
import { Product } from './models/product.entity';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Product]),
  ],
  providers: [ProductService],
  controllers: [ProductsListController, ProductController],
})
export class AppModule {
}
