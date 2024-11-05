// src/app/services/auth.service.ts
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

  // User login method
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Explicitly setting headers

    return this.http.post(`${this.apiUrl}/login`, { username, password }, { headers }).pipe(
      catchError((error: any) => {
        console.error('Login error details:', error); // Logging detailed error for debugging
        return throwError(() => new Error('Login failed, please try again.'));
      })
    );
  }

  // Admin login method
  adminLogin(adminUsername: string, adminPassword: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(`${this.apiUrl}/admin-login`, { adminUsername, adminPassword }, { headers }).pipe(
      catchError((error: any) => {
        console.error('Admin login error details:', error);
        return throwError(() => new Error('Admin login failed, please try again.'));
      })
    );
  }

  // Save user and admin data to local storage
  saveUserData(response: any) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('userName', response.userName);
    localStorage.setItem('userId', response.userId);
  }

  saveAdminData(response: any) {
    localStorage.setItem('adminToken', response.token);
    localStorage.setItem('adminName', response.adminName);
    localStorage.setItem('adminId', response.adminId);
  }

  // User registration method
  register(userData: { fullName: string; email: string; username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      catchError((error: any) => {
        console.error('Registration error', error);
        return throwError(() => new Error('Registration failed, please try again.'));
      })
    );
  }

  // Retrieve user data
  getUserData() {
    return {
      userName: localStorage.getItem('userName') || '',
      userId: localStorage.getItem('userId') || ''
    };
  }

  // Retrieve admin data
  getAdminData() {
    return {
      adminName: localStorage.getItem('adminName') || '',
      adminId: localStorage.getItem('adminId') || ''
    };
  }

  // User logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }

  // Admin logout
  adminLogout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminId');
  }
}
