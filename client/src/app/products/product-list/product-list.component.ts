import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { Product } from '../../models/product.model';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private productListService: ProductListService,
    public dialogService: DialogService,
  ) {
  }

  ngOnInit(): void {
    this.productListService.$onGetProducts.subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  public openDialog(data: any): void {
    if (typeof data === 'string') {
      this.dialogService.showAlertDialog(data);
    } else {
      this.dialogService.showAlertDialog(this.responseData(data));
    }
  }

  public responseData(data: Product) {
    return { id: data.id, name: data.name, photo: data.photo };
  }
}

