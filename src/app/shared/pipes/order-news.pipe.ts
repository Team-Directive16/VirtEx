import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderNews'
})
export class OrderNews implements PipeTransform {
  transform(news: any[], sortBy: string, orderBy: string) {
    if (sortBy) {
      if (orderBy === 'Ascending') {
        return news.sort((a, b) => {
          return a[sortBy].toString().localeCompare(b[sortBy].toString());
        });
      } else {
        return news.sort((a, b) => {
          return b[sortBy].toString().localeCompare(a[sortBy].toString());
        });
      }
    } else {
      return news.sort();
    }
  }
}
