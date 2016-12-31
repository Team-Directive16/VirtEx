import { Component, OnInit, ElementRef } from '@angular/core';
import { Faq } from '../../shared/models/faq.interface';
import { FaqService } from '../../shared/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faq: Faq[];

  constructor(private faqService: FaqService) {
  }

  ngOnInit() {
    this.faqService.getFaq().subscribe(f => this.faq = f);
  }
}
