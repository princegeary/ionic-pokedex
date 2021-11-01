import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  public onlyUserName = 'prince';
  private onlyPassword = 'interactive';

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor() { }

  login(username: string, password: string) {
    if (this.onlyUserName === username && this.onlyPassword === password) {
      return this._userIsAuthenticated = true;
    } else {
      return this._userIsAuthenticated = false;
    }
  }
}
