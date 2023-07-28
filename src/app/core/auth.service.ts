import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private roles = ['ADMINISTRATOR', 'USER'];
  constructor() {}

  public getPermissions(roles: IRoles) {
    console.log(roles);
    return true;
  }
}
