import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './screens/analytics/analytics.component';
import { MapViewComponent } from './screens/map-view/map-view.component';



const routes: Routes = [
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: '',
    component: MapViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
