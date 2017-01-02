import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import {AngularFire} from 'angularfire2';

import { CommentsService } from '../../../../shared/services/index';
import { Comment } from '../../../../shared/models/index';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  comment: Comment = { title: '', body: '' };
  comments: Comment[];

  constructor(
    private commentsService: CommentsService,
    private notif: NotificationsService,
    private af:AngularFire) { }

  ngOnInit() {
    this.subscription = this.commentsService.getComments()
      .subscribe(c => this.comments = c);
  }

  createComment() {
    if (!this.comment.title || !this.comment.body) {
      this.notif.error('Title or content missing!', 'You left some fields blank. Please, fill them up.');
      return;
    }
    this.commentsService.create(this.comment);
    this.comment = { title: '', body: '' };
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
