import { Component } from '@angular/core';
import {APP} from './app.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchIcon = '../assets/icons/2x/search';
  gpsIcon = '../assets/icons/2x/gps';
  texto: string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  constructor(private route: Router) {
  }
  async ngOnInit() {
  }
  clickNav(item) {
    this.route.navigate([item.route])
  }
}
