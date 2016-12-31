import { Injectable } from "@angular/core";
import { News } from "../models/news.interface";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class NewsService {

  news: FirebaseListObservable<News[]>;

  constructor(private af: AngularFireDatabase) {
    this.news = this.af.list('/news');
  }

  getNews() {
    return this.af.list('/news');
  }

  create(value: News) {
    this.news.push(value);
  }

  update(key: string, updateInfo: any) {
    this.news.update(key, updateInfo);
  }
}
