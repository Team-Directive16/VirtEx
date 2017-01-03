import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBooksPipe' })
export class OrderBooksPipe implements PipeTransform {
    transform(obj: any, sortBy: string, orderBy: string, count: string): any[] {
        // rate -> $key, amount -> $value, total, sum

        let orders: any[] = [];

        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                let amount = Number((obj[p].$value + '')).toFixed(8);
                let rate = Number((obj[p].$key + '').replace('p', '.')).toFixed(8);
                orders.push({
                    'amount': amount,
                    'rate': rate,
                    'total': (+amount * +rate).toFixed(8),
                    'sum': 0
                })
            }
        }

        let result: { amount: string, rate: string, total: string, sum: string }[];

        if (sortBy) {
            if (orderBy === 'asc') {
                result = orders.sort((a, b) => {
                    return (+a[sortBy] - +b[sortBy]);
                }).slice(0, +count);
            } else {
                result = orders.sort((a, b) => {
                    return (+b[sortBy] - +a[sortBy].toString());
                }).slice(0, +count);
            }
        } else {
            result = (orders.sort()).slice(0, +count);
        }

        let sum: number = 0;
        for (let i = 0; i < result.length; i++) {
            sum += +result[i].total;
            result[i].sum = sum.toFixed(8);
        }

        return result;
    }
}