import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryComponent } from './pages/country/country.component';

@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    CountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    CountryComponent,
  ],
})
export class CountryModule {}