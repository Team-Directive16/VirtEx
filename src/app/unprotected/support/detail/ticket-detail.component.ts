import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { SupportService } from '../../../shared/services/index';
import { Support } from '../../../shared/models/index';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
})
export class TicketDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ticket: Support;

  constructor(
    private supportService: SupportService,
    private route: ActivatedRoute,
    private router: Router) {
    this.ticket = { title: '', body: '', by: '', createdOn: '' };

  }
  ngOnInit() {
    let key: string;

    this.route
      .params
      .subscribe
      ((params: Params) => key = params['id']);

    this.subscription = this.supportService
      .getTicket(key).subscribe(t => this.ticket = t);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
