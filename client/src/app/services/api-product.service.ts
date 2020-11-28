import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {

  constructor(
    private _http: HttpClient,
  ) {
  }

  public getAllProduct(): Observable<Product[]> {
    try {
      return this._http.get<Product[]>('http://localhost:3000/products/pr');
    } catch (e) {
      console.log(e.messages);
    }
  }
}
