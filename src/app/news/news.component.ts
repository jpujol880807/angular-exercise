import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountriesService} from '../countries.service';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  country: any;
  news: any[];
  subtitle = 'Could not load news for this country';
  content = 'May be a connection error or an invalid country name.';

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    if (this.countriesService.getSelectedCountry()) {
      this.country = {... this.countriesService.getSelectedCountry()};
      this.newsService.getNews(this.country.alpha2Code).subscribe(
        (n: any) => {
          this.news = n.articles;
        }
      );
    }
  }

}
