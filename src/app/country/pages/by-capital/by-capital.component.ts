import { Component } from '@angular/core';
//services
import { CountryService } from '../../services/country.service';
//interfaces
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  query = '';
  isError = false;
  countries: Country[] = [];
  placeholder = 'Buscar por capital ...';

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.isError = false;
    this.query = query;
    this.countryService.searchCapital(query).subscribe({
      next: (countries) => (this.countries = countries),
      error: (error) => {
        this.isError = true;
        this.countries = [];
      },
    });
  }
}
