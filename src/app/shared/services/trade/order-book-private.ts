import { Order } from './order';

export class PrivateOrderBooks {

    public orderBookMap = {}; // account --> order book

    constructor() { }

    // account -> userUID
    get(account: string): Array<Order> {
        return this.orderBookMap[account] || [];
    }

    add(order: Order): void {
        if (!this.orderBookMap[order.userUID]) {
            this.orderBookMap[order.userUID] = [];
        }

        this.orderBookMap[order.userUID].push(order);
    }

    change(newOrder: Order, oldOrder: Order): void {
        var index = this.orderBookMap[newOrder.userUID].indexOf(oldOrder);
        this.orderBookMap[newOrder.userUID].splice(index, 1, newOrder);
    }

    remove(order: Order): void {
        var index = this.orderBookMap[order.userUID].indexOf(order);
        this.orderBookMap[order.userUID].splice(index, 1);
    }
}