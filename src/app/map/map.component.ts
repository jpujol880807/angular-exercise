import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { latLng, tileLayer, Layer , marker, icon} from 'leaflet';
import {CountriesService} from '../countries.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Output() onSelectedCountry = new EventEmitter<string>();
  fitbounds: string;
  zoom: number;
  center: any;
  map_options: any;
  markers: Layer[] = [];
  countries: {
    code: string,
    name: string
  }[];
  selected_country = '';
  country: any;

  constructor(private countriesService: CountriesService, private router: Router) {
    this.zoom = 3;
    this.center = latLng(46.879966, -121.726909);
    this.map_options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ]
    };
  }

  ngOnInit() {
    this.countries = [];
    this.countriesService.getCountries().subscribe(
      (response: any) => {
        response.map((country: any) => {
          this.countries.push({
            code: country.alpha3Code,
            name: country.name
          });
        });
        this.countries = [...this.countries];
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  selectedCountry() {
    this.onSelectedCountry.emit(this.selected_country);
    this.countriesService.getCountry(this.selected_country).subscribe(
      (response: any) => {
        this.country = response;
        this.countriesService.setCountry(this.country);
        this.center = latLng(this.country.latlng);
        this.removeMarker();
        this.addMarker();
        this.router.navigateByUrl('/country' + this.selected_country + '/description');
      },
      (error: any) => {
        console.log(error);
      });
  }

  addMarker() {
    const newMarker = marker(
      latLng(this.country.latlng),
      {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }
    );

    this.markers.push(newMarker);
  }

  removeMarker() {
    this.markers.pop();
  }
}
