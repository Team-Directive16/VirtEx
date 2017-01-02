import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SupportService } from '../../shared/services/index';
import { Support } from '../../shared/models/index';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  defaultAvatar: string;

  supportTickets: Support[];

  constructor(private supportService: SupportService) {
    this.defaultAvatar = "http://www.freeiconspng.com/uploads/profile-icon-9.png";
  }

  ngOnInit() {
    this.subscription = this.supportService
      .getSupportTickets()
      .subscribe(supportTickets => this.supportTickets = supportTickets);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
