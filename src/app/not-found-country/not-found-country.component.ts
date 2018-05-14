import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found-country',
  templateUrl: './not-found-country.component.html',
  styleUrls: ['./not-found-country.component.css']
})
export class NotFoundCountryComponent implements OnInit {
  @Input() subtitle: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
