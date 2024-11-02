import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin: boolean = true;
  isAdminLogin: boolean = false;

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
}
