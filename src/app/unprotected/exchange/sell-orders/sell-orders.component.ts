import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TradeService } from '../../../shared/services/trade/trade.service'
import { OrderBooksPipe } from '../../../shared/pipes/order-books-pipe'

@Component({
  selector: 'app-sell-orders',
  templateUrl: './sell-orders.component.html',
  styleUrls: ['./sell-orders.component.css']
})
export class SellOrdersComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  sellOrders: any[];

  constructor(private _tradeService: TradeService) { }

  ngOnInit() {
    this.subscription = this._tradeService
      .getAggregatedOrderBookAsks()
      .subscribe(sellOrders => this.sellOrders = sellOrders);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}