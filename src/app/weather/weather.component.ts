import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../countries.service';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  country: any;
  weather: any;
  subtitle = 'No country information found';
  content = 'May be a connection error or an invalid country name.';

  constructor(
    private countriesService: CountriesService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    if (this.countriesService.getSelectedCountry()) {
      this.country = {... this.countriesService.getSelectedCountry()};
      this.weatherService.getWeather(this.country.capital.replace(' ', '_'),this.country.alpha2Code).subscribe(
        (weather: any) => {
          this.weather = weather;
          console.log(weather);
        }
      );
    }
  }

  convertToC(val: string) {
    const fTempVal = parseFloat(val);
    return fTempVal - 273.15;
  }


}
