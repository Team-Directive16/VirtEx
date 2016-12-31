import { Injectable } from "@angular/core";
import { NewsDetails } from "../models/news-details.interface";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class NewsDetailsService {

  news: FirebaseListObservable<NewsDetails[]>;

  constructor(private af: AngularFireDatabase) {
    this.news = this.af.list('/news-details');
  }

  getNewsDetails() {
    return this.af.list('/news-details');
  }

  create(value: NewsDetails) {
    this.news.push(value);
  }

  update(key: string, updateInfo: any) {
    this.news.update(key, updateInfo);
  }
}
