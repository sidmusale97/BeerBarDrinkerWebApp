import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BarsComponent } from './bars/bars.component';
import {TableModule} from 'primeng/table';
import { BarInsightsComponent } from './bar-insights/bar-insights.component';
import { BeerComponent } from './beer/beer.component';
import { BeerInsightsComponent } from './beer-insights/beer-insights.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { DrinkerInfoComponent } from './drinker-info/drinker-info.component';
import { ModificationComponent } from './modification/modification.component';
import { QueryComponent } from './query/query.component';
import { FormsModule }   from '@angular/forms';
import { QueryResultComponent } from './query-result/query-result.component';
import { BarTransactComponent } from './bar-transact/bar-transact.component';
import { PatternverifyComponent } from './patternverify/patternverify.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarsComponent,
    BarInsightsComponent,
    BeerComponent,
    BeerInsightsComponent,
    DrinkerComponent,
    DrinkerInfoComponent,
    ModificationComponent,
    QueryComponent,
    QueryResultComponent,
    BarTransactComponent,
    PatternverifyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
