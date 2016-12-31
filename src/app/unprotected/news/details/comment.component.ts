import { CommentsService } from '../../../shared/services/comments.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  comments: Array<any>;
  constructor(private commentsService: CommentsService) {
    this.commentsService.getComments()
      .subscribe(c => this.comments = c);
  }
}
