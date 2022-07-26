import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//others modules
import { CountryModule } from './country/country.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    CountryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
