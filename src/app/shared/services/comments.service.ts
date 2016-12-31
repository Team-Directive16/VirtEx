import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class CommentsService {
  comments: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
     this.comments = this.af.list('/comments');
  }

  getComments() {
    return this.af.list('/comments');
  }

  create(value) {
    this.comments.push(value);
  }
}
