import { Component, OnInit } from '@angular/core';
import { News } from '../../shared/models/news.interface';
import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];
  new={
    title:'Test',
    body:'More test',
    createdOn:'01/01/2017',
    byUser:'admin',
    comments:2
  }

  constructor(private newsService: NewsService) {
   }

  ngOnInit() {
    this.newsService.getNews().subscribe(n => this.news = n);
  }

}
