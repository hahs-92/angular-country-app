import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
//interfaces
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private BASE_URL = 'https://restcountries.com/v2';

  get httpParams() {
    //optimizar
    return new HttpParams().set(
      'fields',
      'name,capital,flags,population,alpha2Code'
    );
  }

  constructor(private http: HttpClient) {}

  searchCountry(countryName: string): Observable<Country[]> {
    const URL = `${this.BASE_URL}/name/${countryName}`;
    return this.http.get<Country[]>(URL, { params: this.httpParams });

    //de esta forma capturamos el error
    // return this.http.get(URL).pipe(catchError((err) => of([])));
  }

  searchCapital(capitalName: string): Observable<Country[]> {
    const URL = `${this.BASE_URL}/capital/${capitalName}`;
    return this.http.get<Country[]>(URL, { params: this.httpParams });
  }

  getCountryByCode(id: string): Observable<Country> {
    const URL = `${this.BASE_URL}/alpha/${id}`;
    return this.http.get<Country>(URL);
  }

  searchCountriesByRegion(region: string): Observable<Country[]> {
    const URL = `${this.BASE_URL}/regionalbloc/${region}`;
    return this.http
      .get<Country[]>(URL, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}

// <!-- api: https://restcountries.com/#api-endpoints-v3-all -->
// <!-- v2: https://restcountries.com/v2/region/europe -->

//107 errors handler
