import { Component, Input } from '@angular/core';
import {FaqService} from '../../../shared/services/faq.service';
import { Faq } from '../../../shared/models/faq.interface';

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

  create() {
    this.faqService.create(this.question)
  }
}
