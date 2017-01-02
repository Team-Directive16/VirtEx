import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { NotificationsService } from 'angular2-notifications';
import { Title } from "@angular/platform-browser";

import { AuthService } from "../../shared/services/index";
import { User } from "../../shared/models/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _title: Title,
    private _fb: FormBuilder,
    private _notificationsService: NotificationsService) {
  }

  onSignIn(userInfo: User): void {  //sign in
    if (this.myForm.invalid || !this.myForm.value) {
      this._notificationsService.error('Incorrect email or password', 'Please, try again');
      return;
    }

    this._authService
      .login(userInfo)
      .then(success => {
        if (success) {
          this._notificationsService.success('Success', 'User: ' + this._authService.authenticatedUser.email + ' successfully signed-in')
        } else {
          this._notificationsService.error('Error', 'Incorrect email, password or connection problems')
        }
      })
  }

  ngOnInit(): void {
    this._title.setTitle('Sign in');  //page title

    this.myForm = this._fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
}
