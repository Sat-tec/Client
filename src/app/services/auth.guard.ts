import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Your AuthService where login logic is

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Allow access if user is logged in
    } else {
      // Redirect to login if user is not authenticated
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
