import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admin: boolean = false;

  entrarComoAdmin() {
    this.admin = true;
  }

  sair() {
    this.admin = false;
  }

  isAdmin(): boolean {
    return this.admin;
  }
}