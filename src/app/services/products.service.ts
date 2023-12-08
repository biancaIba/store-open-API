import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { env } from '../../environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    const apiUrl = `${env.url}products/categories`;
    return this.http.get<string[]>(apiUrl);
  }

  getProducts(category: string): Observable<Product[]> {
    let request;
    if (category === 'all')
      request = this.http.get<Product[]>(`${env.url}products`);
    else
      request = this.http.get<Product[]>(
        `${env.url}products/category/${category}`
      );
    return request.pipe(
      catchError(() => {
        return throwError(() => new Error('Something went wrong!'));
      })
    );
  }
}
