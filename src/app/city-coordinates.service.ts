import { Injectable } from '@angular/core';
import { CityCoords } from './city-coords.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CityModel } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CityCoordinatesService {

  constructor(private http: HttpClient) {}

  getCityCoordinates(city: string): Observable<CityCoords> {
    return this.http.get<CityModel[]>('/assets/cities.json')
      .pipe(
        map((cities: CityModel[]) => cities.find(c => c.name?.toLocaleLowerCase() === city)?.coord || {})
      );
  }
}
