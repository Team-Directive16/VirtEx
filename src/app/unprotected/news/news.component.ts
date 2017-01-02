import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from '../../shared/models/index';
import { NewsService, CommentsService } from '../../shared/services/index';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  news: News[];

  constructor(
    private newsService: NewsService,
    private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.subscription = this.newsService.getNews().subscribe(n => this.news = n);
  }

  delete(key: string): void {
    this.newsService.remove(key);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
