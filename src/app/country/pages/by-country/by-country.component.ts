import { Component } from '@angular/core';
//services
import { CountryService } from '../../services/country.service';
//interfaces
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  query = '';
  isError = false;
  countries: Country[] = [];
  suggestionCountries: Country[] = [];
  placeholder = 'Buscar por pais ...';
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.isError = false;
    this.showSuggestions = false;
    this.query = query;
    this.countryService.searchCountry(query).subscribe({
      next: (countries) => (this.countries = countries),
      error: (error) => {
        this.isError = true;
        this.countries = [];
      },
    });
  }

  suggestions(query: string) {
    this.isError = false;
    this.query = query;
    this.showSuggestions = true;

    this.countryService.searchCountry(query).subscribe({
      next: (countries) => (this.suggestionCountries = countries.splice(0, 5)),
      error: (err) => (this.suggestionCountries = []),
    });
  }

  searchSuggestion(query: string) {
    this.search(query);
  }
}
