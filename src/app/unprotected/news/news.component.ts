import { Component, OnInit } from '@angular/core';

import { News } from '../../shared/models/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [
    { createdOn: new Date(2016, 2, 8), title: 'Breaking news!', comments: 0 },
    { createdOn: new Date(2016, 2, 8), title: 'Breaking legs!', comments: 1 },
    { createdOn: new Date(2016, 2, 8), title: 'Breaking hands!', comments: 5 },
    { createdOn: new Date(2016, 2, 8), title: 'Breaking bad!', comments: 52 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
