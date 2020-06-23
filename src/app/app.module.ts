import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AnalyticsComponent } from './screens/analytics/analytics.component';
import { MapViewComponent } from './screens/map-view/map-view.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { LoginComponent } from './screens/login/login.component';
import { GoogleMapsModule } from '@angular/google-maps';
// import {} from ''
@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    MapViewComponent,
    SettingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
