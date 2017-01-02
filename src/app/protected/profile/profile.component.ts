import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { UserInfo } from 'firebase';

import { User } from '../../shared/models/index';
import { AuthService } from '../../shared/services/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  subscription: Subscription;

  user: UserInfo;

  defaultUserPhotoURL: string = "http://www.freeiconspng.com/uploads/profile-icon-9.png";

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.subscription = this.auth.getUser().map(u => u.auth.providerData[0]).subscribe(u => this.user = u);
    console.log(this.user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
