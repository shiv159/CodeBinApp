import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = new FormControl('',[Validators.email,Validators.required]);
  password = new FormControl('',[Validators.required]);

  loginForm= new FormGroup(
    {
      email:this.email,
     password:this.password
    }
  )

  login(){
    console.log(this.loginForm.value)
  }
  reset(){
    this.loginForm.reset();
  }


}
