import { NewsDetailsService } from '../../../shared/services/news-details.service';
import { Component } from '@angular/core';
import { NewsDetails } from '../../../shared/models/news-details.interface';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {

  details: NewsDetails[];
  constructor(private newsDetailsService: NewsDetailsService) {
    this.newsDetailsService.getNewsDetails()
    .subscribe(nDetails => this.details = nDetails)
    console.log(this.details);
  }
}
