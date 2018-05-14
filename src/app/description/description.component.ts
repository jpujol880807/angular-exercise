import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../countries.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  country: any;
  subtitle = 'No country information found';
  content = 'May be a connection error or an invalid country name.';

  constructor(private countriesService: CountriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      if (p['code'] !== '___') {
        this.countriesService.getCountry(p['code']).subscribe(
          (response: any) => {
            this.country = response;
          },
          (error: any) => {
            this.content = 'Error fetching data from countries service.';
          });
      }
    });
  }

}
