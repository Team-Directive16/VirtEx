import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Faq } from '../../shared/models/index';
import { FaqService } from '../../shared/services/index';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  faq: Faq[];

  constructor(private faqService: FaqService) {
  }

  ngOnInit() {
    this.subscription=this.faqService.getFaq().subscribe(f => this.faq = f);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
