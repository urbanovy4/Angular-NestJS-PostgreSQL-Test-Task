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

  public getAllProductsIds(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/products/');
  }

  public getAllPrice(id: string): Observable<number> {
    try {
      return this.http.get<number>(`http://localhost:3000/product/price?id=${id}`);
    } catch (e) {
      console.log(e.messages);
    }
  }

  public getAllProductsWithoutPrice(id: string): Observable<Product> {
    try {
      return this.http.get<Product>(`http://localhost:3000/product/info?id=${id}`);
    } catch (e) {
      console.log(e.message);
    }
  }
}
