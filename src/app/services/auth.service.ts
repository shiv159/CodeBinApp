import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?: string;
  constructor(private routes: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        this.uid = user.uid;
        console.log(`User Logged In: ${user.email}`);
        // ...
      } else {
        // User is signed out
        this.uid = undefined;
        console.log('User Logged Out');
        // ...
      }
    });
  }

  isAuthenticated() {
    return this.uid != null;
  }
  getUid() {
    return this.uid;
  }

  registerUser(email: string, password: string) {
    console.log('Register User', email, password);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up

        const user = userCredential.user;
        console.log(`User Signed Up: ${user}`);
        this.routes.navigate(['']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error while Signing Up ${errorMessage}`);

        // ..
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`User Loged Up: ${user}`);
        this.routes.navigate(['']);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error while Logging-in  ${errorMessage}`);
      });
  }
  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User Signed Out');
        this.routes.navigate(['']);
      })
      .catch((error) => {
        // An error happened.
        console.log(`Error while Logging-out  ${error.errorMessage}`);
      });
  }
}
