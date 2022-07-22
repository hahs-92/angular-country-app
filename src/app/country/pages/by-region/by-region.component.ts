import { Component } from '@angular/core';
//services
import { CountryService } from '../../services/country.service';
//interfaces
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin: 5px 5px 5px 0px;
      }
    `,
  ],
})
export class ByRegionComponent {
  countries: Country[] = [];
  // regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regions = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];

  activeRegion = '';

  constructor(private countryService: CountryService) {}

  getClassCss(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    }

    this.activeRegion = region;
    // this.countries = [];
    this.countryService.searchCountriesByRegion(region).subscribe({
      next: (data) => (this.countries = data),
      error: (error) => console.error(error),
    });
  }
}
