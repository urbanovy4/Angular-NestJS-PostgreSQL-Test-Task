import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { Product } from '../../models/product.model';
import { DialogService } from '../../services/dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {

  public products: any[] = [];
  public productsIds: string[] = [];
  private subscription: Subscription;

  constructor(
    private productListService: ProductListService,
    public dialogService: DialogService,
  ) {
  }

  ngOnInit(): void {
    this.productListService.$onGetProducts.subscribe((res: string[]) => {
      this.productsIds = res;

      this.productsIds.forEach(id => {
        this.generateProduct(id);
      });

    });
  }

  public openDialog(data: any): void {
    if (typeof data === 'object') {
      this.dialogService.showAlertDialog(this.responseData(data));
    } else {
      this.dialogService.showAlertDialog(data);
    }
  }

  public responseData(data) {
    return { id: data.id, name: data.name, photo: data.photo };
  }

  public generateProduct(id: string) {
    this.subscription = this.productListService.getAllProductsWithoutPrice(id).subscribe((info: Product) => {
      this.products.push(info);
      this.productListService.getAllProductPrice(id).subscribe((price: number) => {
        info.price = price;
      });
    });
  }

  ngOnDestroy() {
    this.productListService.$onGetProducts.unsubscribe();
    this.subscription.unsubscribe();
  }
}
