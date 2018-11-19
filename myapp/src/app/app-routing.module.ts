import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarsComponent } from './bars/bars.component';
import { BarInsightsComponent } from './bar-insights/bar-insights.component';
import {DrinkerInfoComponent} from './drinker-info/drinker-info.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { ModificationComponent } from './modification/modification.component';
import { QueryComponent } from './query/query.component';

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
    path: 'drinker/info/:drinker',
    pathMatch: 'full',
    component: DrinkerInfoComponent
  },
  {
    path: 'drinker',
    pathMatch: 'full',
    component: DrinkerComponent
  },
  {
    path: 'modification',
    pathMatch: 'full',
    component: ModificationComponent
  },
  {
    path: 'query',
    pathMatch: 'full',
    component: QueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
