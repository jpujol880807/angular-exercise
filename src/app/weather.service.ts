import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WeatherService {

  baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  api_key = '5b335c778ddf2b295de87a3bcef0e2bd';

  constructor(private http: HttpClient) { }

  getWeather(city: string, country: string) {
    return this.http.get(this.baseUrl + '?q=' + city + ',' + country + '&APPID=' + this.api_key);
  }

}
