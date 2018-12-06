import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartjsindexComponent } from './chartjsindex/chartjsindex.component'; // <-- ignore ""chartjs" naming, chartjs no longer in use, back then used for component's name!
import { ChartModule, StockChart, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as Highstock from 'highcharts/modules/stock.src';


const appRoutes: Routes = [
  { path: 'chartjsindex', component: ChartjsindexComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ChartjsindexComponent,
    ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- only used for debugging purposes
    ),
    BrowserModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [Highstock]}    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
