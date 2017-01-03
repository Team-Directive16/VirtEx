import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fixedDigitsNumber'
})
export class FixedDigitsNumber implements PipeTransform {
    transform(strNumber: any) {
        return Number((strNumber + '').replace('p', '.')).toFixed(8);
    }
}