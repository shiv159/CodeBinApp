import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private router: Router,private authService:AuthService) {}

  email = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)]);

  signupForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  signup() {
    console.log(this.signupForm.value);
   const inputEmail=this.signupForm.value.email;
   const inputPassword=this.signupForm.value.password;
    if(inputEmail==null || inputPassword==null){
      return;
    }
    this.authService.registerUser(inputEmail,inputPassword);

    // this.router.navigate(['/login']);
  }
  reset() {
    this.signupForm.reset();
  }
}
