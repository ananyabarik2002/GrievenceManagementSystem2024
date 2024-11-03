import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin: boolean = true;
  isAdminLogin: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.isAdminLogin = false;
  }

  switchToAdminLogin() {
    this.isAdminLogin = true;
    this.isLogin = false;
  }

  switchToUserLogin() {
    this.isAdminLogin = false;
    this.isLogin = true;
  }

  onLoginSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.authService.saveUserData(response);
        this.router.navigate(['/layout/dashboard']);
      },
      error => {
        console.error('Login failed', error);
        alert('Invalid credentials');
      }
    );
  }
}
