import { FirebaseListObservable } from 'angularfire2';
import { Order } from './order';

export class AggregatedOrderBook {

    constructor() { }

    public static add(orderBook: FirebaseListObservable<Object>, order: Order)
        : PromiseLike<{ type: string, data: { price: number, quantity: number } }> {
        let type: string;
        let quantity: number = Number(order.quantity);
        let priceRateString = (order.priceRate + '').replace('.', 'p');

        return orderBook.$ref.ref.child(priceRateString)
            .once('value', function (snap) {
                if (snap.exists()) {
                    let prevQuantity: number = Number(snap.exportVal());
                    quantity += prevQuantity;
                    console.log('1: prevQuantity: ', prevQuantity);
                    console.log('2: quantity: ', quantity);
                    type = 'change';
                } else {
                    console.log('2: quantity: ', quantity);
                    type = 'new';
                }

                orderBook.$ref.ref.child(priceRateString).set(quantity);

                return {
                    type: type,
                    data: {
                        price: order.priceRate,
                        quantity: quantity
                    }
                }
            })
    }

    public static reduce(orderBook: FirebaseListObservable<Object>, quantity: number, priceRate: number)
        : PromiseLike<{ type: string, data: { price: number, quantity?: number } }> {
        let type: string;
        let prevQuantity: number;
        let priceRateString = (priceRate + '').replace('.', 'p');

        return orderBook.$ref.ref.child(priceRateString)
            .once('value', function (snap) {
                prevQuantity = Number(snap.exportVal());
                // console.log('1: prevQuantity: ', prevQuantity);
                prevQuantity -= Number(quantity);
                // console.log('2: new quantity: ', prevQuantity);

                orderBook.$ref.ref.child(priceRateString).set(prevQuantity);

                // console.log('3: before remove: ', prevQuantity);
                if (prevQuantity === 0) {
                    // console.log('4: remove: ');
                    orderBook.$ref.ref.child(priceRateString).remove();

                    return {
                        type: 'removal',
                        data: {
                            price: priceRate
                        }
                    }
                }

                return {
                    type: 'change',
                    data: {
                        price: priceRate,
                        quantity: prevQuantity
                    }
                }
            })
    }
}