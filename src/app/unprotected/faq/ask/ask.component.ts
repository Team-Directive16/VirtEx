import { Component, Input } from '@angular/core';
import { FaqService } from '../../../shared/services/index';
import { Faq } from '../../../shared/models/index';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent {
  @Input() question: Faq = {
    title: '',
    body: ''
  }

  constructor(private faqService: FaqService) {
  }

  create(): void {
    this.faqService.create(this.question)
  }
}
