import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Spring Boot endpoint

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  saveUserData(response: any) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('userName', response.userName);
    localStorage.setItem('userId', response.userId);
  }

  getUserData() {
    return {
      userName: localStorage.getItem('userName'),
      userId: localStorage.getItem('userId')
    };
  }
}
