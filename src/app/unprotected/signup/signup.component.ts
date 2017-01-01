import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { NotificationsService } from 'angular2-notifications';
import { Title } from "@angular/platform-browser";

import { AuthService } from "../../shared/services/index";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _title: Title,
    private _authService: AuthService, 
    private _notificationsService: NotificationsService) { }

  onSignUp() {
    if (this.myForm.invalid) {
      this._notificationsService.error('Incorrect email or password', 'Please, try again');
      return;
    }

    this._authService
      .signUp(this.myForm.value)
      .then(success => {
        if (success) {
          this._notificationsService.success('Welcome!', 'User: ' + this._authService.authenticatedUser.email + ' registered successfully')
        } else {
          this._notificationsService.error('Error', 'Duplicate user or connection problems')
        }
      })
  }

  ngOnInit(): any {
    this.myForm = this._fb.group({
      email: ['', Validators.compose([Validators.required, this.isEmail])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([Validators.required, this.isEqualPassword.bind(this)])]
    });

    this._title.setTitle('Sign up');  //page title
  }

  isEmail(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return { noEmail: true }
    }
  }

  isEqualPassword(control: FormControl): { [s: string]: boolean } {
    if (!this.myForm) {
      return { passwordsNotMatch: true }
    }

    if (control.value !== this.myForm.controls['password'].value) {
      return { passwordsNotMatch: true }
    }
  }
}