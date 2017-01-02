import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { Subscription } from 'rxjs';

import { AuthService, ChatService } from '../services/index';
import { Chat } from '../models/index';

@Component({
  selector: 'app-trollbox',
  templateUrl: './trollbox.component.html',
  styleUrls: ['./trollbox.component.css']
})
export class TrollboxComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  chats: Chat[];

  chat: Chat;

  constructor(private chatService: ChatService, private auth: AuthService, private _af: AngularFire) {
  }

  ngOnInit() {
    this.chat = {
      text: '',
      username: ''
    };

    this.subscription = this.chatService.getChat().subscribe(c => this.chats = c);
  }

  send() {
    this.chat.username = this.auth.authenticatedUser.email || 'No one';
    this.chatService.create(this.chat);
    this.chat = {
      text: '',
      username: ''
    };
  }

  clear() {
    this.chatService.remove();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
