import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarsComponent } from './bars/bars.component';
import { BarInsightsComponent } from './bar-insights/bar-insights.component';
import { BeerComponent } from './beer/beer.component';
import { BeerInsightsComponent } from './beer-insights/beer-insights.component';
import {DrinkerInfoComponent} from './drinker-info/drinker-info.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { ModificationComponent } from './modification/modification.component';
import { QueryComponent } from './query/query.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { PatternverifyComponent } from './patternverify/patternverify.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
  	path: 'static',
  	pathMatch: 'full',
  	redirectTo: 'welcome'
  },
  {
  	path: 'welcome',
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
  },
  {
    path: 'query/:query',
    pathMatch: 'full',
    component: QueryResultComponent
  },
  {
    path: 'pattern',
    pathMatch:'full',
    component: PatternverifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
