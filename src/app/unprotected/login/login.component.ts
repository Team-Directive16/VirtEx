import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { SimpleNotificationsComponent } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';

import { AuthService } from "../../shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  options = {
    timeOut: 4000,
    position: ["top", "left"],
    showProgressBar: false,
    preventDuplicates: true,
  }
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationsService) { }

  onSignin() {
    if (this.myForm.invalid || !this.myForm.value) {
      this.notificationService.error('Incorrect email or password', 'Please, try again');
    } else {
      this.authService.signinUser(this.myForm.value);
      this.notificationService.success('Sign in success!', 'You are signed in!');
      //this.router.navigate(['']);

    }
  }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      email: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required, Validators.minLength(6)],
    });
  }
}
