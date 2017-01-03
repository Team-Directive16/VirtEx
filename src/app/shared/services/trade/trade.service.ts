import { Injectable } from "@angular/core";
import { Subscription } from 'rxjs';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AggregatedOrderBook } from './order-book-aggregated';
import { PrivateOrderBooks } from './order-book-private';
import { Order } from './order';
import { OrderAction } from './order-action';
import { Trade } from './trade';

@Injectable()
export class TradeService {

  orderID = 0;

  public data = {
    privateOrderBook: new PrivateOrderBooks(),
    tradeHistory: {}
  };

  public bidOrders: Order[] = []; // sorted lowest to highest price (best offer)
  public askOrders: Order[] = []; // sorted highest to lowest price (best offer)

  private aggregatedOrderBookBidsList: FirebaseListObservable<any>;
  private aggregatedOrderBookAsksList: FirebaseListObservable<any>;

  private bidOrdersList: FirebaseListObservable<Order[]>;
  private askOrdersList: FirebaseListObservable<Order[]>;

  private tradesHistoryList: FirebaseListObservable<Trade[]>;

  constructor(private _afDB: AngularFireDatabase) {
    this.aggregatedOrderBookBidsList = this._afDB.list('/aggregated-order-book/bids');
    this.aggregatedOrderBookAsksList = this._afDB.list('/aggregated-order-book/asks');
    this.bidOrdersList = this._afDB.list('/bid-orders');
    this.askOrdersList = this._afDB.list('/ask-orders');
    this.tradesHistoryList = this._afDB.list('/trades-history');
  }

  public onOrder(quantity: number, priceRate: number, action: OrderAction, userUID: string) {
    this.matcherOnNewOrder(new Order(++this.orderID, quantity, priceRate, action, userUID, quantity))
  }

  /**
   * Attempts to match new order with existing orders, otherwise adds it to be matched
   *
   * @param {Order} newOrder:
   *
   * @returns {void}
   */
  private matcherOnNewOrder(newOrder: Order): void {
    var order = this.match(newOrder, newOrder.isBid() ? this.askOrders : this.bidOrders);

    if (order) {
      let index = 0;
      let orders = order.isBid() ? this.bidOrders : this.askOrders;

      // console.log('1.before: ', orders);

      while (!!orders[index] && orders[index].hasBetterPrice(order)) {
        index++
      }

      this.onNewOrder(order);
      orders.splice(index, 0, order);

      // console.log('2.after: ', orders);
    }
  }

  /**
   * Matches an order with potential candidate orders
   *
   * @param {Order}                toMatch: new order that needs a match
   * @param {Array<Order>} candidateOrders: potential orders that can be matched
   *
   * @returns {Order} null if order has been fully matched, otherwise remaining part of the order
   */
  private match(toMatch: Order, candidateOrders: Array<Order>): Order {
    console.log('match (toMatch: Order, ...');
    let order = toMatch;

    while (!!candidateOrders[0] && order.canMatch(candidateOrders[0])) {
      let existingOrder = candidateOrders[0];
      let matchedQuantity = Math.min(order.quantity, existingOrder.quantity);

      // match at existing order's price, and lowest quantity
      this.onNewTrade(new Trade(matchedQuantity, existingOrder.priceRate, order.action));

      if (order.quantity >= existingOrder.quantity) {

        this.onMatchedOrder(existingOrder);
        candidateOrders.splice(0, 1); // existing fully matched, remove

        if (order.quantity === existingOrder.quantity) {
          return null // new order fully matched
        }

        order = order.reduceQuantity(existingOrder.quantity); // returns new order
      } else {
        candidateOrders[0] = existingOrder.reduceQuantity(order.quantity); // existing order partially matched

        return null // new order fully matched
      }
    }

    return order;
  }

  private onNewTrade(trade: Trade): void {
    console.log('matcher: new trade', trade);

    this.tradesHistoryList.push(trade);
  }

  private onNewOrder(order: Order) {
    console.log('matcher: new order: ',
      order.id, order.quantity, order.priceRate, OrderAction[order.action], order.userUID, order.initialQuantity);

    this.data.privateOrderBook.add(order);

    let update = order.isBid() ? AggregatedOrderBook.add(this.aggregatedOrderBookBidsList, order)
      : AggregatedOrderBook.add(this.aggregatedOrderBookAsksList, order);
  }

  private onMatchedOrder(order: Order) {
    console.log('matcher: matched order', order.id, order.priceRate, order.quantity);

    this.data.privateOrderBook.remove(order);

    let update = order.isBid() ? AggregatedOrderBook.reduce(this.aggregatedOrderBookBidsList, order.quantity, order.priceRate)
      : AggregatedOrderBook.reduce(this.aggregatedOrderBookAsksList, order.quantity, order.priceRate)
  }
}