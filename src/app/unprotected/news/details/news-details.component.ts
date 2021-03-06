import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { News} from '../../../shared/models/index';
import { NewsService } from '../../../shared/services/index';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  detail: News;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router) {
      this.detail={
        title:'',
        body:'',
        createdOn:'',
        byUser:''
      }
    }

  ngOnInit() {
    let key: string;
    this.route
      .params
      .subscribe
      ((params: Params) => key = params['id']);

    this.subscription = this.newsService.getById(key)
      .subscribe(nDetails => this.detail = nDetails)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
