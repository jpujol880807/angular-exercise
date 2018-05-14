import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountriesService} from '../countries.service';
import {CurrencyService} from '../currency.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  country: any;
  currencies: any[];
  subtitle = 'No money information found';
  content = 'May be a connection error or an invalid country name.';

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    if (this.countriesService.getSelectedCountry()) {
      this.country = {... this.countriesService.getSelectedCountry()};
      this.currencies = [...this.countriesService.getSelectedCountry().currencies];
      for (let i = 0; i < this.currencies.length; i++) {
        this.currencyService.toUSD(this.currencies[i].code).subscribe(
          (d: any) => {
            this.currencies[i].value = d[this.currencies[i].code + '_USD'].val;
          }
        );
      }
    }
  }

}
