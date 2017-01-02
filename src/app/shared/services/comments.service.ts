import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Comment } from '../models/index';

@Injectable()
export class CommentsService {
  comments: FirebaseListObservable<Comment[]>;

  constructor(private af: AngularFireDatabase) {
    this.comments = this.af.list('/comments');
  }

  getComments(): FirebaseListObservable<Comment[]> {
    return this.af.list('/comments');
  }

  create(value): void {
    this.comments.push(value);
  }

  remove(key?: string): void {
    this.comments.remove(key);
  }

  update(key: string, updateInfo?: string): void {
    this.comments.update(key, updateInfo);
  }
}
