import { Injectable } from '@angular/core';
import { CurrentForecastDetailsModel } from './forecasts/current-forecast-details/current-forecast-details.model';
import { Observable } from 'rxjs';
import { CityCoords } from './city-coords.model';
import { TemperatureUnit } from './temperature-unit.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class WeatherForecastService {
  constructor(private apiService: ApiService) { }

  TemperatureUnitsToString = {
    [TemperatureUnit.Fahrenheit]: 'F',
    [TemperatureUnit.Celsius]: 'C',
    [TemperatureUnit.Kelvin]: 'K'
  };

  mapToForecastDetails(responseData: any, tempUnit: TemperatureUnit): CurrentForecastDetailsModel {
    return {
      cityCoords: {
        lon: responseData.coord.lon,
        lat: responseData.coord.lat
      },
      cityName: responseData.name,
      description: responseData.weather[0].description,
      iconUrl: `https://openweathermap.org/img/w/${responseData.weather[0].icon}.png`,
      temp: responseData.main.temp,
      tempUnit: this.TemperatureUnitsToString[tempUnit],
      minTemp: responseData.main.temp_min,
      maxTemp: responseData.main.temp_max,
      feelsLike: responseData.main.feels_like,
      feelsLikeUnit: this.TemperatureUnitsToString[tempUnit],
      humidity: responseData.main.humidity.toString(),
      humidityUnit: '%',
      windSpeed: responseData.wind.speed.toString(),
      windSpeedUnit: 'm/s',
      clouds: responseData.clouds.all.toString(),
    };
  }


  getCurrentForecast(coords: CityCoords, tempUnit: TemperatureUnit): Observable<CurrentForecastDetailsModel> {
    //return of(this.mapToForecastDetails(this.mock, TemperatureUnit.Celsius))
    return this.apiService.get(coords, tempUnit)
  }
}
