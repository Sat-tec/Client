// // src/app/shared/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

export interface User {
  confirmPassword: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  id: number;
  username: string;
  email: string;
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth`;

  constructor(private http: HttpClient) {}

  // Sign up method
  signUp(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  // Sign in method
  signIn(user: Partial<User>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signin`, user);
  }



  isLoggedIn(): boolean {
    // Check if token exists in localStorage
    const token = localStorage.getItem('authToken');
    return !!token; // Return true if token exists
  }
}







// auth.service.ts
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';
// import { HttpClient } from '@angular/common/http';

// export interface User {
//   confirmPassword: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export interface AuthResponse {
//   id: number;
//   username: string;
//   email: string;
//   accessToken: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private apiUrl = `${environment.apiUrl}/api/auth`;

//   signIn(user: Partial<User>, http: HttpClient): Observable<AuthResponse> {
//     return http.post<AuthResponse>(`${this.apiUrl}/signin`, user);
//   }
// }