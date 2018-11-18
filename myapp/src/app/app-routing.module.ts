import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarsComponent } from './bars/bars.component';
import { BarInsightsComponent } from './bar-insights/bar-insights.component';
import { BeerComponent } from './beer/beer.component';
import { BeerInsightsComponent } from './beer-insights/beer-insights.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'bars',
    pathMatch:'full',
    component:BarsComponent
  },
  {
    path: 'bars/graphs/:bar',
    pathMatch: 'full',
    component: BarInsightsComponent
  },
  {
    path: 'beer',
    pathMatch: 'full',
    component: BeerComponent
  },
  {
    path: 'beer/:beer',
    pathMatch: 'full',
    component: BeerInsightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
