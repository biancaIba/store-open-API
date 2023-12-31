import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _auth: AngularFireAuth,
    private router: Router,
    private cartService: CartService
  ) {}

  async login(email: string, password: string) {
    try {
      return await this._auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert('The login could not be done. Error: ' + error);
      return null;
    }
  }

  async register(email: string, password: string) {
    try {
      return await this._auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert('The register could not be done. Error: ' + error);
      return null;
    }
  }

  async logOut() {
    this._auth.signOut();
    location.reload(); // reload the web
    this.cartService.cancelCart();
    this.router.navigate(['']);
  }

  getUserData() {
    return this._auth.authState;
  }
}
