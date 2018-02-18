import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent { }

export class LoadingPage {
  public loading: boolean;
  constructor(val: boolean) {
    this.loading = val;
  }
  standby() {
    this.loading = true;
  }
  ready() {
    this.loading = false;
  }
}



