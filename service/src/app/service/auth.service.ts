import {Injectable} from '@angular/core';

export interface AuthService {
  isAuthen(): boolean;

  login();

  logout();
}

@Injectable({
  providedIn: 'root'
})
export class IAuthService implements AuthService {
  user: any;

  constructor() {
  }

  isAuthen(): boolean {
    return !!this.user;
  }

  login() {
    this.user = {
      name: 'nguyenanh',
      token: 'token'
    }
    ;
  }

  logout() {
    this.user = null;
  }
}
