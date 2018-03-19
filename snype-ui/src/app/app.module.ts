import { BrowserModule } from '@angular/platform-browser';

// For then ng-material library compatibility
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
          MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoadingComponent } from './loading/loading.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchResultComponent } from './search-result/search-result.component';

// TODO need to break this out into a dashboard module etc. so that we dont have so many imports stacked in here.
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoadingComponent,
    DashboardComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


