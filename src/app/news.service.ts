import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewsService {
   apiKey = 'c37c4b5033e74bb2abc3ef70c6867dbc';
  constructor(private http: HttpClient) { }

  getNews(country: string) {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + this.apiKey);
  }

}
