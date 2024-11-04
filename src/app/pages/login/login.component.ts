import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Mark this component as standalone
  imports: [FormsModule, CommonModule] // Import FormsModule here for ngModel binding
})
export class LoginComponent {
  isLogin: boolean = true;               // Controls user login view
  isAdminLogin: boolean = false;         // Controls admin login view
  username: string = '';                  // User's username
  password: string = '';                  // User's password

  // Admin Login Fields
  adminUsername: string = '';             // Admin's username
  adminPassword: string = '';             // Admin's password

  // Registration Fields
  registerFullName: string = '';          // Full name for registration
  registerEmail: string = '';             // Email for registration
  registerUsername: string = '';          // Username for registration
  registerPassword: string = '';          // Password for registration
  registerConfirmPassword: string = '';   // Confirm password for registration

  constructor(private authService: AuthService, private router: Router) {}

  toggleForm() {
    this.isLogin = !this.isLogin;         // Toggle between login and registration
    this.isAdminLogin = false;            // Ensure admin login is hidden when toggling
  }

  switchToAdminLogin() {
    this.isAdminLogin = true;             // Switch to admin login view
    this.isLogin = false;                 // Ensure user login is hidden
  }

  switchToUserLogin() {
    this.isAdminLogin = false;            // Switch to user login view
    this.isLogin = true;                  // Ensure user login is visible
  }

  onLoginSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.authService.saveUserData(response); // Save user data upon successful login
        this.router.navigate(['/layout/dashboard']); // Redirect to user dashboard
      },
      error => {
        console.error('Login failed', error); // Log error to console
        alert('Invalid credentials');           // Alert user for invalid login
      }
    );
  }

  onAdminLoginSubmit() {
    this.authService.adminLogin(this.adminUsername, this.adminPassword).subscribe(
      response => {
        this.authService.saveAdminData(response); // Save admin data upon successful login
        this.router.navigate(['/layout/admin-dashboard']); // Redirect to admin dashboard
      },
      error => {
        console.error('Admin login failed', error); // Log error to console
        alert('Invalid admin credentials');          // Alert user for invalid admin login
      }
    );
  }

  onRegisterSubmit() {
    if (this.registerPassword !== this.registerConfirmPassword) {
      alert('Passwords do not match!'); // Alert if passwords do not match
      return;
    }

    this.authService.register({
      fullName: this.registerFullName,
      email: this.registerEmail,
      username: this.registerUsername,
      password: this.registerPassword
    }).subscribe(
      response => {
        alert('Registration successful!'); // Alert on successful registration
        this.toggleForm();                 // Switch back to login form after registration
      },
      error => {
        console.error('Registration failed', error); // Log error to console
        alert('Registration failed. Please try again.'); // Alert user for registration failure
      }
    );
  }
}
