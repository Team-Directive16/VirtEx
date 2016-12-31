import { Injectable } from "@angular/core";
import { Faq } from "../models/faq.interface";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class FaqService {
  faq: FirebaseListObservable<Faq[]>;

  constructor(private af: AngularFireDatabase) {
     this.faq = this.af.list('/faq');
  }

  getFaq() {
    return this.af.list('/faq');
  }

  create(value:Faq) {
    this.faq.push(value);
  }
}
