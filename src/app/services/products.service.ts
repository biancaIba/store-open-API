import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { env } from '../../environments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService,
  ) { }

  getCategories(): Observable<string[]> {
    const apiUrl = `${env.url}products/categories`;
    return this.http.get<string[]>(apiUrl);
  }

  getProducts(category: string): Observable<Product[]> {
    if (category === 'all') {
      const apiUrl = `${env.url}products`;
      return this.http.get<Product[]>(apiUrl).pipe(
        catchError(this.handleError.handleError)
      );
    } else {
      const apiUrl = `${env.url}products/category/${category}`;
      return this.http.get<Product[]>(apiUrl);
    }
  }
}
