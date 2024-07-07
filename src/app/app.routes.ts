import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreatebinComponent } from './components/createbin/createbin.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'create',component:CreatebinComponent},
    {path: 'signup',component:SignupComponent},
    {path: '',redirectTo: '/login',pathMatch: 'full'},
    {path: '**',component:NotfoundComponent}
];
