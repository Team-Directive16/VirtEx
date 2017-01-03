import { OrderAction } from './order-action';

export class Order {

    private created: number;

    /**
     * Immutable order object
     *
     * @param {number}              id: order id
     * @param {number}        quantity: order quantity
     * @param {number}       priceRate: order price rate
     * @param {OrderAction}     action: orders action (BID or ASK)
     * @param {string}         userUID: account order belongs to
     * @param {number} initialQuantity: initial order quantity
     * @param {number}         created: order creation time
     */
    constructor(
        public id: number,
        public quantity: number,
        public priceRate: number,
        public action: OrderAction,
        public userUID: string,
        public initialQuantity: number) {

        if (this.initialQuantity == null) {
            this.initialQuantity = this.quantity;
        }

        this.created = -1 * Date.now(); // -1 simmplified sorting in reversed order

        Object.freeze(this); // immutable
    }

    /**
     * If order is a bid order
     *
     * @returns {boolean} true if order is a bid order, otherwise false
     */
    public isBid(): boolean {
        return this.action === OrderAction.BID;
    }

    /**
     * Returns true if order can be matched with given counterpart
     *
     * @param {Order} order: counterpart order
     *
     * @returns {boolean} true if can be matched, otherwise false
     */
    public canMatch(order: Order): boolean {
        if (this.isBid() === order.isBid()) {
            return false; // can't match two BID or two ASK orders
        }

        if (this.isBid()) {
            return this.priceRate >= order.priceRate; // this (BID) >= order (ASK)
        }

        // ASK
        return this.priceRate <= order.priceRate; // this (ASK) <= order (BID)
    }

    /**
     * Returns true if this order has a better price than given counterpart order
     *
     * @param {Order} order: counterpart order
     *
     * @returns {boolean} true if better price
     */
    public hasBetterPrice(order: Order): boolean {
        if (this.isBid() !== order.isBid()) {
            throw new Error('Cannot compare prices between orders with different actions');
        }

        if (this.isBid()) {
            return this.priceRate >= order.priceRate;
        }

        // ASK
        return this.priceRate <= order.priceRate;
    }

    /**
     * Returns new order object with reduced quantity
     *
     * @param {number} amount: amount to reduce existing quantity by
     *
     * @returns {Order} new order object with reduced quantity
     */
    public reduceQuantity(amount: number): Order {
        return new Order(
            this.id,
            this.quantity - amount,
            this.priceRate,
            this.action,
            this.userUID,
            this.initialQuantity);
    }
}