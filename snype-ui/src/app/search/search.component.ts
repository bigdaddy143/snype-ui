import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material';
import { LoadingPage } from '../loading/loading.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends LoadingPage {

  constructor() {
    super(false);
  }

  search() {
    console.log('User Searched: ');
    this.loading = true;
  }
}
