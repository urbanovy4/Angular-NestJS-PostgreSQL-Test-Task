import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';
import { ApiProductService } from './api-product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  public $onGetProducts: Subject<Product[]> = new Subject<Product[]>();

  constructor(
    private apiProductService: ApiProductService,
  ) {
    this.apiProductService.getAllProduct().subscribe((res: Product[]) => {
      this.$onGetProducts.next(res);
    });
  }

}
