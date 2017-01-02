import { Component, OnInit} from '@angular/core';
import { SupportService } from '../../shared/services/index';
import { Support } from '../../shared/models/index';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  defaultAvatar: string;

 supportTickets: Support[]=[];

  constructor(private supportService: SupportService) {
    this.defaultAvatar = "http://www.freeiconspng.com/uploads/profile-icon-9.png";
  }

  ngOnInit() {
    this.supportService
      .getSupportTickets()
      .subscribe(supportTickets => this.supportTickets = supportTickets);
  }

}
