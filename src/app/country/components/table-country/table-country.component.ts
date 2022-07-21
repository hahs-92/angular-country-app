import { Component, Input } from '@angular/core';
//interface
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.css'],
})
export class TableCountryComponent {
  @Input() countries: Country[] = [];

  constructor() {}
}
