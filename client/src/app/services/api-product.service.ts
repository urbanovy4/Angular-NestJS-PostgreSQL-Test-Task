import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAllProduct(): Observable<Product[]> {
    try {
      return this.http.get<Product[]>('http://localhost:3000/products/');
    } catch (e) {
      console.log(e.messages);
    }
  }
}
