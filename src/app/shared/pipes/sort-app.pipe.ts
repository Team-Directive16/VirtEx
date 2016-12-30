import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortApp'
})
export class SortApp implements PipeTransform {
    transform(array: any[], sortBy: string) {
        if (sortBy) {
            return array.sort((a, b) => {
                return a[sortBy].toString().localeCompare(b[sortBy].toString());
            });
        } else {
            return array.sort();
        }
    }
}
