import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {HttpClientModule} from '@angular/common/http';
import {CountriesService} from './countries.service';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import { NewsComponent } from './news/news.component';
import { MoneyComponent } from './money/money.component';
import { WeatherComponent } from './weather/weather.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundCountryComponent } from './not-found-country/not-found-country.component';
import {CurrencyService} from './currency.service';
import {NewsService} from './news.service';
import {WeatherService} from './weather.service';

const appRoutes: Routes = [
  {
    path: 'country/:code/description',
    component: DescriptionComponent
  },
  {
    path: 'country/:code/',
    component: DescriptionComponent
  },
  {
    path: 'country/:code/money',
    component: MoneyComponent
  },
  {
    path: 'country/:code/news',
    component: NewsComponent
  },
  {
    path: 'country/:code/weather',
    component: WeatherComponent
  },
  {
    path: '**',
    component: NotFoundCountryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DescriptionComponent,
    NewsComponent,
    MoneyComponent,
    WeatherComponent,
    NotFoundCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    LeafletModule.forRoot()
  ],
  providers: [CountriesService, CurrencyService, NewsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
