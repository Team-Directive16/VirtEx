import { Component, OnInit } from '@angular/core';
import {NewsDetails} from '../../../shared/models/news-details.interface';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  detail:NewsDetails =
  {
    title: 'Breaking news', createdOn: new Date(2016, 2, 8), byUser: 'admin', body: 'Text', comments: [{
      commentTitle: 'hello',
      commentBody: 'you suck'
    }]
  }
  ngOnInit() {

  }
}
