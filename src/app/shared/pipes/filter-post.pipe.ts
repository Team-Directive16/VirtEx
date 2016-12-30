import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPosts'
})
export class FilterPosts implements PipeTransform {
  transform(posts: any[], input: string) {
    if (input === "") {
      return posts;
    }
    return posts.filter(place => place.name.toLowerCase().includes(input.toLowerCase()));
  }
}
