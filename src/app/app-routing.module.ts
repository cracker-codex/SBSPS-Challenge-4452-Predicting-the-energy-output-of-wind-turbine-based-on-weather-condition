import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './screens/analytics/analytics.component';
import { MapViewComponent } from './screens/map-view/map-view.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { LoginComponent } from './screens/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'map-view',
    component: MapViewComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
