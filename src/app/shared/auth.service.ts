import { EmailPasswordCredentials } from 'angularfire2/auth';
import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { User } from "./models/user.interface";
import { Router } from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router, private af: AngularFireDatabase) { }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

}
