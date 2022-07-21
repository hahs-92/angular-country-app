import { Component } from '@angular/core';
//services
import { CountryService } from '../../services/country.service';
//interfaces
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  query = '';
  isError = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search() {
    this.isError = false;
    this.countryService.searchCountry(this.query).subscribe({
      next: (countries) => (this.countries = countries),
      error: (error) => {
        this.isError = true;
        this.countries = [];
      },
    });
  }
}
