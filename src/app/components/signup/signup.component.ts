import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 constructor(private router:Router){

 }


  email = new FormControl('',[Validators.email,Validators.required]);
password = new FormControl('',[Validators.required]);


signupForm=new FormGroup({
email:this.email,
password:this.password

});
 signup(){
   console.log(this.signupForm.value)
    this.router.navigate(['/login']);
 }
  reset(){
    this.signupForm.reset();
  }


}
