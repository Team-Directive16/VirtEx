import { Component } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';
import { SimpleNotificationsComponent, NotificationsService } from 'angular2-notifications';

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private options = {
    timeOut: 4000,
    position: ["top", "left"],
    showProgressBar: false,
    preventDuplicates: true
  }

  constructor(
    private _af: AngularFire,
    private _authService: AuthService,
    private _notificationsService: NotificationsService) { }

  onLogout() {
    this._authService.logout();
    this._notificationsService.success('Success', 'User: ' + this._authService.authenticatedUser.email + ' successfully signed-out')
  }
}