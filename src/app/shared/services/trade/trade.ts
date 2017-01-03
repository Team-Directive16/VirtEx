import { OrderAction } from './order-action';

export class Trade {

    public created: number;

    /**
     * Immutable trade object
     *
     * @param {number}       quantity: trade quantity
     * @param {number}      priceRate: trade price rate
     * @param {OrderAction} aggressor: trade aggressor
     */
    constructor(
        public quantity: number,
        public priceRate: number,
        public aggressor: OrderAction) {

        this.created = -1 * Date.now(); // -1 simmplified sorting in reversed order

        Object.freeze(this); // immutable
    }
}