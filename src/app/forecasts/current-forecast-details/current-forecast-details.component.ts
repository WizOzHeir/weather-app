import { Component, Input } from '@angular/core';
import { CurrentForecastDetailsModel } from './current-forecast-details.model';
import { faTemperatureHigh, faTemperatureLow, faThermometerHalf, faTint, faWind, faCloud } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-current-forecast-details',
  templateUrl: './current-forecast-details.component.html'
})
export class CurrentForecastDetailsComponent {
  faTemperatureHigh = faTemperatureHigh
  faTemperatureLow = faTemperatureLow
  faThermometerHalf = faThermometerHalf
  faTint = faTint
  faWind = faWind
  faCloud = faCloud

  @Input() forecast?: CurrentForecastDetailsModel;

}
