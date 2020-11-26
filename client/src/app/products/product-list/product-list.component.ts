import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private productListService: ProductListService
  ) {
  }


  ngOnInit(): void {
    this.productListService.$onGetProducts.subscribe((res: Product[]) => {
        this.products = res;
    });
  }

}

