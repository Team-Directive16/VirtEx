import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../shared/services/comments.service';
import {Comment} from '../../../shared/models/index';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit{
  comments: Comment[];
  constructor(private commentsService: CommentsService) {}

  ngOnInit(){
    this.commentsService.getComments()
      .subscribe(c => this.comments = c);
  }
}
