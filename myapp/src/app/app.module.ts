import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BarsComponent } from './bars/bars.component';
import {TableModule} from 'primeng/table';
import { BarInsightsComponent } from './bar-insights/bar-insights.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarsComponent,
    BarInsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
