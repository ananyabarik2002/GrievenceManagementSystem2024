// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  adminUsername = '';
  adminPassword = '';
  registerFullName = '';
  registerEmail = '';
  registerUsername = '';
  registerPassword = '';
  registerConfirmPassword = '';
  isLogin = true;
  isAdminLogin = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {} // Inject Router

  // For user login
  onLoginSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('User login successful:', response);
        this.authService.saveUserData(response);
        this.errorMessage = null;
      },
      (error) => {
        console.error('User login failed:', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    );
  }

  // Direct check for admin login with hardcoded credentials
  onAdminLoginSubmit() {
    if (this.adminUsername === 'admin' && this.adminPassword === '1234') {
      console.log('Admin login successful');
      this.errorMessage = null;
      this.router.navigate(['/admin-dashboard']); // Navigate to admin dashboard
    } else {
      console.error('Admin login failed');
      this.errorMessage = 'Admin login failed. Please check your credentials.';
    }
  }

  // For registration
  onRegisterSubmit() {
    if (this.registerPassword !== this.registerConfirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const userData = {
      fullName: this.registerFullName,
      email: this.registerEmail,
      username: this.registerUsername,
      password: this.registerPassword,
    };

    this.authService.register(userData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.errorMessage = null;
      },
      (error) => {
        console.error('Registration failed:', error);
        this.errorMessage = 'Registration failed. Please try again.';
      }
    );
  }

  // Toggle between user and admin login
  switchToAdminLogin() {
    this.isAdminLogin = true;
    this.isLogin = false;
    this.errorMessage = null;
  }

  switchToUserLogin() {
    this.isAdminLogin = false;
    this.isLogin = true;
    this.errorMessage = null;
  }

  // Toggle registration form
  toggleForm() {
    this.isLogin = !this.isLogin;
    this.isAdminLogin = false;
    this.errorMessage = null;
  }
}
