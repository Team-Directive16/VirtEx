import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq = [{ id: 1, title: "I've never heard of Bitcoins, what exactly are they?", body: "Developed in 2009, Bitcoin (frequently referred to as BTC) is a digital form of currency, revolutionizing the world by becoming the first online currency able to be traded between individuals without a 'middle man.' This means that users of the Bitcoin system are able to trade Bitcoins with one another without going through a payment processor such as a bank, allowing you the freedom to buy, sell and trade as you please. For a lot more information check How it works or the official Bitcoin site Bitcoin ." },
  { id: 2, title: "I've never heard of Bitcoins, what exactly are they?", body: "Developed in 2009, Bitcoin (frequently referred to as BTC) is a digital form of currency, revolutionizing the world by becoming the first online currency able to be traded between individuals without a 'middle man.' This means that users of the Bitcoin system are able to trade Bitcoins with one another without going through a payment processor such as a bank, allowing you the freedom to buy, sell and trade as you please. For a lot more information check How it works or the official Bitcoin site Bitcoin ." }]
  constructor() { }

  ngOnInit() {
  }
}
