import { CityCoords } from "src/app/city-coords.model";

export interface CurrentForecastDetailsModel {
    cityCoords: CityCoords,
    cityName: string,
    description: string,
    iconUrl: string,
    temp: number,
    tempUnit: string,
    minTemp: number,
    maxTemp: number,
    feelsLike: number,
    feelsLikeUnit: string,
    humidity: string,
    humidityUnit: string,
    windSpeed: string,
    windSpeedUnit: string,
    clouds: string,
}