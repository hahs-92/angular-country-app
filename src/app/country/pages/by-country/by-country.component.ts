import { Component } from '@angular/core';
//services
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  query = '';
  isError = false;

  constructor(private countryService: CountryService) {}

  search() {
    this.isError = false;
    this.countryService.searchCountry(this.query).subscribe({
      next: (countries) => console.log(countries),
      error: (error) => (this.isError = true),
    });
  }
}
