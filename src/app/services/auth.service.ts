import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      catchError(error => {
        console.error('Login error', error);
        return throwError(() => new Error('Login failed, please try again.'));
      })
    );
  }

  saveUserData(response: any) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('userName', response.userName);
    localStorage.setItem('userId', response.userId);
  }

  getUserData() {
    return {
      userName: localStorage.getItem('userName') || '',
      userId: localStorage.getItem('userId') || ''
    };
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }
}
