import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environments';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    const apiUrl = `${env.url}products/categories`;
    return this.http.get<string[]>(apiUrl);
  }

  getProducts(category: string): Observable<Product[]> {
    if (category === 'all') {
      const apiUrl = `${env.url}products`;
      return this.http.get<Product[]>(apiUrl);
    } else {
      const apiUrl = `${env.url}products/category/${category}`;
      return this.http.get<Product[]>(apiUrl);
    }
  }

}
