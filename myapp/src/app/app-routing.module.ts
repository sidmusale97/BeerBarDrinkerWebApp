import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarsComponent } from './bars/bars.component';
import { BarInsightsComponent } from './bar-insights/bar-insights.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
