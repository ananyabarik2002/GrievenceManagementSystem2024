import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(
      catchError((error: any) => {
        return throwError(() => new Error('Login failed, please try again.'));
      })
    );
  }

  adminLogin(adminUsername: string, adminPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin-login`, { adminUsername, adminPassword }).pipe(
      catchError((error: any) => {
        return throwError(() => new Error('Admin login failed, please try again.'));
      })
    );
  }

  getUserData(): any {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null; // Parse and return the data if it exists
  }

  saveUserData(userData: any): void {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      catchError((error: any) => {
        return throwError(() => new Error('Registration failed, please try again.'));
      })
    );
  }
}
