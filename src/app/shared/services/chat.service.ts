import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Chat } from '../models/index';

@Injectable()
export class ChatService {
  chat: FirebaseListObservable<Chat[]>;

  constructor(private af: AngularFireDatabase) {
    this.chat = this.af.list('/chat');
  }

  getChat(): FirebaseListObservable<Chat[]> {
    return this.af.list('/chat');
  }

  create(value): void {
    this.chat.push(value);
  }

  remove(key?: string): void {
    this.chat.remove(key);
  }
}
