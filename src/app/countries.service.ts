import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CountriesService {

  baseUrl = 'https://restcountries.eu/rest/v2/';
  country: any;
  constructor(private http: HttpClient) { }

  public getCountries() {
    return this.http.get(this.baseUrl + 'all');
  }

  public getCountry(code: string) {
    return this.http.get(this.baseUrl + 'alpha/' + code);
  }

  public setCountry(country: any) {
    this.country = {...country};
  }

  public getSelectedCountry() {
    return this.country;
  }

}
