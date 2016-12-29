import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent {
  @Input() question: any;

  //add this to faq section
}
