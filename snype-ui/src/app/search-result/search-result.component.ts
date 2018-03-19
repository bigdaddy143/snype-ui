import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() id: string;

  constructor() {
   }

  ngOnInit() {
  }

}
