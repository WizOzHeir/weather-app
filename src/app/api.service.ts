import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CityCoords } from "./city-coords.model";
import { TemperatureUnit } from "./temperature-unit.model";
import { environment } from "src/environment";

@Injectable({
    providedIn: 'root'
  })
  
export class ApiService {
  private readonly apiKey = environment.apiKey;
  private readonly apiBaseUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {  }
  
  public get(coords: CityCoords, tempUnit: TemperatureUnit): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${this.apiKey}&units=${tempUnit}`);
  }
}