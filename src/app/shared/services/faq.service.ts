import { Injectable } from "@angular/core";
import { Faq } from "../models/faq.interface";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class FaqService {
  faq: FirebaseListObservable<Faq[]>;

  constructor(private af: AngularFireDatabase) {
    this.faq = this.af.list('/faq');
  }

  getFaq(): FirebaseListObservable<Faq[]> {
    return this.af.list('/faq');
  }

  create(value: Faq): void {
    this.faq.push(value);
  }

  remove(key?: string): void {
    this.faq.remove(key);
  }

  update(key: string, updateInfo?: string): void {
    this.faq.update(key, updateInfo);
  }
}
