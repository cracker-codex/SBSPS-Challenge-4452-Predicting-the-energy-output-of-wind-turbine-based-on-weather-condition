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
import { GoogleMapsModule } from '@angular/google-maps';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AgmCoreModule} from '@agm/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
// import {} from ''
@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    MapViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    GoogleMapsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBNu4JPVrzoTv_4I3UnAAygHNeRuiK5II'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
