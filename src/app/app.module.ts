import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';
import { CurrentForecastDetailsComponent } from './forecasts/current-forecast-details/current-forecast-details.component';
import { ForecastsComponent } from './forecasts/forecasts.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CurrentForecastDetailsComponent,
    ForecastsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
