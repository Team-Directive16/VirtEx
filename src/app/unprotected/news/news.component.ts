import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news = [
  { createdOn: '28/02/2016', title: 'Breaking news!', comments: 0 },
  { createdOn: '24/02/2016', title: 'Breaking legs!', comments: 1 },
  { createdOn: '18/02/2016', title: 'Breaking hands!', comments: 5 },
  { createdOn: '08/02/2016', title: 'Breaking bad!', comments: 52 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
