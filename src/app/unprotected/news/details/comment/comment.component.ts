import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommentsService } from '../../../../shared/services/index';
import { Comment } from '../../../../shared/models/index';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  comments: Comment[];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.subscription = this.commentsService.getComments()
      .subscribe(c => this.comments = c);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
