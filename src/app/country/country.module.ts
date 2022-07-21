import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modulos extra
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//pages
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryComponent } from './pages/country/country.component';
import { TableCountryComponent } from './components/table-country/table-country.component';
import { InputCountryComponent } from './components/input-country/input-country.component';

@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    CountryComponent,
    TableCountryComponent,
    InputCountryComponent,
  ],
  imports: [
    FormsModule, // para poder usar el ngModel
    RouterModule,
    CommonModule,
  ],
  exports: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    CountryComponent,
  ],
})
export class CountryModule {}
