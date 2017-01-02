import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Support } from '../models/index';

@Injectable()
export class SupportService {

  support: FirebaseObjectObservable<Support>;

  supportList: FirebaseListObservable<Support[]>;

  constructor(private af: AngularFireDatabase, private http: Http) {
    this.supportList = this.af.list('/support');
  }

  getSupportTickets(): FirebaseListObservable<Support[]> {
    return this.af.list('/support');
  }

  addSupportTicket(ticket): void {
    this.supportList.push(ticket);
  }

  getTicket(id: string): FirebaseObjectObservable<Support> {
    return this.af.object('/support/' + id);
  }

  removeSupportTicket(key: string): void {
    this.supportList.remove(key);
  }
}
