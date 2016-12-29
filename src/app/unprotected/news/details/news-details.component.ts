import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  detail =
  {
    title: 'Breaking news', createdOn: '20/02/2016', by: 'admin', text: 'Text', comments: [{
      commentTitle: 'hello',
      commentBody: 'you suck'
    }]
  }
  ngOnInit() {

  }
}
