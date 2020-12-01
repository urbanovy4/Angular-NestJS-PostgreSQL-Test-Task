import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, Subject } from 'rxjs';
import { ApiProductService } from './api-product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  public $onGetProducts: Subject<any> = new Subject<any>();
  public productIds: string[] = [];

  constructor(
    private apiProductService: ApiProductService,
  ) {
    this.apiProductService.getAllProductsIds().subscribe((res) => {
      this.productIds = res;
      this.$onGetProducts.next(res);
    });
  }

  public getAllProductPrice(id: string): Observable<number> {
    return this.apiProductService.getAllPrice(id);
  }

  public getAllProductsWithoutPrice(id: string): Observable<any> {
    return this.apiProductService.getAllProductsWithoutPrice(id);
  }
}
