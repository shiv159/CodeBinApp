import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  email = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  login() {
    console.log(this.loginForm.value);

    const inputEmail = this.loginForm.value.email;
    const inputPassword = this.loginForm.value.password;
    if (inputEmail == null || inputPassword == null) {
      return;
    }
    this.authService.loginUser(inputEmail, inputPassword);
  }
  reset() {
    this.loginForm.reset();
  }
}
