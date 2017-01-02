import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Support } from '../models/index';

@Injectable()
export class SupportService {

  support: FirebaseObjectObservable<Support>;

  supportList: FirebaseListObservable<Support[]>;

  constructor(private af: AngularFireDatabase) {
    this.supportList = this.af.list('/support');
  }

  getSupportTickets(): FirebaseListObservable<Support[]> {
    return this.af.list('/support');
  }

  addSupportTicket(ticket: Support): void {
    this.supportList.push(ticket);
  }

  getTicket(id: string): FirebaseObjectObservable<Support> {
    return this.af.object('/support/' + id);
  }

  removeSupportTicket(key?: string): void {
    this.supportList.remove(key);
  }

  updateSupportTicket(key: string, updateInfo: string): void {
    this.supportList.update(key, updateInfo);
  }
}
