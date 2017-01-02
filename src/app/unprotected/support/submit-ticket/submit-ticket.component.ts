import { Title } from '@angular/platform-browser';
import { TicketDetailComponent } from '../detail/ticket-detail.component';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { SupportService, AuthService } from '../../../shared/services/index';
import { Support } from '../../../shared/models/index';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {
  ticket: Support;

  constructor(
    private supportService: SupportService,
     private auth: AuthService,
     private notif:NotificationsService) {

  }

  ngOnInit() {
    this.ticket = {
      title: '',
      body: '',
      createdOn: new Date().toJSON().slice(0, 10),
      by: this.auth.authenticatedUser.email
    }
  }

  create() {
    if(!this.ticket.title || !this.ticket.body){
      this.notif.error('Title or content missing!', 'You left some fields empty.');
      return;
    }
    this.supportService.addSupportTicket(this.ticket);

    this.ticket = {
      title: '',
      body: '',
      createdOn: new Date().toJSON().slice(0, 10),
      by: this.auth.authenticatedUser.email
    }
  }

}
