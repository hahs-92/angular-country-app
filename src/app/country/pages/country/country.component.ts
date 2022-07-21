import { Component, OnInit } from '@angular/core';
//routes
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
//services
import { CountryService } from '../../services/country.service';
//interface
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent implements OnInit {
  country!: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        //recibe un observable y devuleve otro
        switchMap((params) => {
          const id = params.get('id') || '';
          return this.countryService.getCountryByCode(id);
        }),
        //tap nos permite ejecutar un efecto secundario
        //recibe lo de switchMap y develuve lo que le digamos
        tap(() => console.log('tapo'))
      )
      .subscribe({
        next: (country) => {
          this.country = country;
          console.log(country);
        },
        error: (error) => console.error(error),
      });

    // Sin el swithMap

    // this.route.paramMap.subscribe((params) => {
    //   const id = params.get('id') || '';
    //   console.log(id);

    //   this.countryService
    //     .getCountryByCode(id)
    //     .subscribe((country) => console.log(country));
    // });
  }
}
