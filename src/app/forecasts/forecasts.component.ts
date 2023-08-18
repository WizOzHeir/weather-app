import { Component } from '@angular/core';
import { CurrentForecastDetailsModel } from 'src/app/forecasts/current-forecast-details/current-forecast-details.model';
import { CityCoordinatesService } from '../city-coordinates.service';
import { WeatherForecastService } from '../weather-forecast.service';
import { CityCoords } from '../city-coords.model';
import { TemperatureUnit } from '../temperature-unit.model';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html'
})
export class ForecastsComponent {
  currentForecastDetails?: CurrentForecastDetailsModel;

  constructor(
    private cityCoordinatesService: CityCoordinatesService,
    private weatherForecastService: WeatherForecastService
  ) {}

  onSearch(city: string): void {
    this.cityCoordinatesService.getCityCoordinates(city)
      .subscribe((coords: CityCoords) => {
        if (coords.lon && coords.lat) {
          this.weatherForecastService.getCurrentForecast(coords, TemperatureUnit.Celsius)
            .subscribe((forecast: CurrentForecastDetailsModel) => {
              this.currentForecastDetails = this.weatherForecastService.mapToForecastDetails(forecast, TemperatureUnit.Celsius);
            });
        } else {
          // TODO: Handle case where city coordinates are not found
          console.log("NOT FOUND city coordinates for" + city)
        }
      });
  }
}
