import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material';
import { LoadingPage } from '../loading/loading.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends LoadingPage {
  public lastSearchString: string;


  constructor() {
    super(false);
    this.lastSearchString = '';
  }

  // Changing scope from searchString and using submittedSearch incase the user changes the string
  // after a search already was kicked off
  search(submittedSearch) {
    console.log('User Searched: ' + submittedSearch);
    this.lastSearchString = submittedSearch;
    this.loading = true;

    this.searchService.searchKeyword(newHero)
      .subscribe(hero => this.heroes.push(hero));
  }

  
}
