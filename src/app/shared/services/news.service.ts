import { Injectable } from "@angular/core";
import { News } from "../models/news.interface";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class NewsService {

  newsList: FirebaseListObservable<News[]>;

  constructor(private af: AngularFireDatabase) {
    this.newsList = this.af.list('/news');
  }

  getNews(): FirebaseListObservable<News[]> {
    return this.af.list('/news');
  }

  getById(id: string): FirebaseObjectObservable<News> {
    return this.af.object('/news/' + id);
  }

  create(value: News): void {
    this.newsList.push(value);
  }

  update(key: string, updateInfo: any): void {
    this.newsList.update(key, updateInfo);
  }
}
