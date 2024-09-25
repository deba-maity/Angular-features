import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Your login logic here
    // Example: Check if username and password are valid
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  }

  logout() {
    // Simulate user logout
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
