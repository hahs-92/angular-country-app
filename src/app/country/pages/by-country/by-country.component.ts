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
  placeholder = 'Buscar por pais ...';

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.isError = false;
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
    console.log(query);
    this.isError = false;
    //TODO: crear sugerencias
  }
}
