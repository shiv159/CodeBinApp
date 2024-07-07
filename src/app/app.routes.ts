import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreatebinComponent } from './components/createbin/createbin.component';
import { authGuard } from './auth.guard';
import { SnippetsComponent } from './components/snippets/snippets.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreatebinComponent, canActivate: [authGuard] },
  {path:'snippets',component:SnippetsComponent,canActivate:[authGuard]},
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];
