import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material';
import { LoadingPage } from '../loading/loading.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends LoadingPage {
  public searchString: string;

  constructor() {
    super(false);
    this.searchString = '';
  }

  // Changing scope from searchString and using submittedSearch incase the user changes the string
  // after a search already was kicked off
  search(submittedSearch) {
    console.log('User Searched: ' + submittedSearch);
    this.loading = true;
  }
}
