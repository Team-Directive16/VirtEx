import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TradeService } from '../../../shared/services/trade/trade.service'
import { OrderBooksPipe } from '../../../shared/pipes/order-books-pipe'

@Component({
  selector: 'app-buy-orders',
  templateUrl: './buy-orders.component.html',
  styleUrls: ['../sell-orders/sell-orders.component.css']
})
export class BuyOrdersComponent implements OnInit {
  subscription: Subscription;

  buyOrders: any[];

  constructor(private _tradeService: TradeService) { }

  ngOnInit() {
    this.subscription = this._tradeService
      .getAggregatedOrderBookBids()
      .subscribe(buyOrders => this.buyOrders = buyOrders);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
