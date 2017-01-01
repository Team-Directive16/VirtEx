import { NewsDetailsService } from '../../../shared/services/news-details.service';
import { Component, OnInit } from '@angular/core';
import { NewsDetails } from '../../../shared/models/news-details.interface';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  details: NewsDetails[];
  constructor(private newsDetailsService: NewsDetailsService) {}

  ngOnInit(){
    this.newsDetailsService.getNewsDetails()
    .subscribe(nDetails => this.details = nDetails)
  }
}
