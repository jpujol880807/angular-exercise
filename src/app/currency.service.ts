import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  toUSD(code: string){
    return this.http.get('https://free.currencyconverterapi.com/api/v5/convert?q=' + code + '_USD&compact=y');
  }

}
