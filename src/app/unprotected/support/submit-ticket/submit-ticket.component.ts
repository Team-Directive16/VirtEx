import { Component, OnInit } from '@angular/core';
import { SupportService, AuthService } from '../../../shared/services/index';
import { Support } from '../../../shared/models/index';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {
  ticket: Support;

  constructor(private supportService: SupportService, private auth: AuthService) {

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
    this.supportService.addSupportTicket(this.ticket);

    this.ticket = {
      title: '',
      body: '',
      createdOn: new Date().toJSON().slice(0, 10),
      by: this.auth.authenticatedUser.email
    }
  }
}
