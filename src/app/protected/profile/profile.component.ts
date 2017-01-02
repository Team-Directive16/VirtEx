import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/index';
import { AuthService } from '../../shared/services/index';
import { UserInfo } from 'firebase';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserInfo;

  defaultUserPhotoURL: string = "http://www.freeiconspng.com/uploads/profile-icon-9.png";

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUser().map(u => u.auth.providerData[0]).subscribe(u => this.user = u);
    console.log(this.user);
  }

}
