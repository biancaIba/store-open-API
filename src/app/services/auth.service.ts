import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { env } from '../../environments';
import { HandleErrorService } from './handle-error.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}

  login(username: string, password: string): Observable<string> {
    const user = {
      username,
      password,
    };
    const apiUrl = `${env.url}auth/login`;
    return this.http.post<string>(apiUrl, user).pipe(
      catchError((error: any) => {
        let errorMessage = 'Something went wrong!';
        if (error.status === 401)
          errorMessage = 'User or password are incorrect.';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  setUser(id: number): void {
    localStorage.setItem('userId', id.toString());
  }

  getUser(): User | null {
    const id = localStorage.getItem('userId');
    let user = null;
    if (id)
      this.userRequest(id).subscribe((data: User) => {
        user = data;
      });
    return user;
  }

  private userRequest(id: string): Observable<User> {
    const apiUrl = `${env.url}users/${id}`;
    return this.http.get<User>(apiUrl);
  }
}
