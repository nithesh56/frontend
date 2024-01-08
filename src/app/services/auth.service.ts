import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: { userName: string, password: string }): any {
    let userArray: any[] = [];

    const storedUsers = localStorage.getItem('Users');
    
    if (storedUsers !== null) {
      userArray = JSON.parse(storedUsers) as any[];
    }

    const authenticatedUser = userArray.find(p => p.userName === user.userName && p.password === user.password);

    return authenticatedUser;
  }
}
