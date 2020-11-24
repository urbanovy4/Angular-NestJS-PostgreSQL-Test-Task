import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ProductListComponent],
  exports: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
})
export class ProductsModule {
}
