import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
//interfaces
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private BASE_URL = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  searchCountry(countryName: string): Observable<Country[]> {
    const URL = `${this.BASE_URL}/name/${countryName}`;
    return this.http.get<Country[]>(URL);

    //de esta forma capturamos el error
    // return this.http.get(URL).pipe(catchError((err) => of([])));
  }
}

// <!-- api: https://restcountries.com/#api-endpoints-v3-all -->
// <!-- v2: https://restcountries.com/v2/region/europe -->

//107 errors handler
