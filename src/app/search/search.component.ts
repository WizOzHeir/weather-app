import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchTerm = '';
  faSearch = faSearch;

  @Output() searchCity = new EventEmitter<string>();

  onSearch(): void {
    const term = this.searchTerm.trim().toLocaleLowerCase()
    if (term.length > 0) {
      this.searchCity.emit(term)
    }
  }
}
