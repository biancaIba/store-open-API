import { Injectable } from '@angular/core';
import { env } from 'src/environments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * @param email 
   * @param password 
   * @returns token | error message
   */
  login(email: string, password: string): Observable<string> {
    const user = {
      email,
      password
    }
    const apiUrl = `${env.url}auth/login`;
    return this.http.post<string>(apiUrl, user).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) console.error('An error occurred:', error.error);
    else console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
