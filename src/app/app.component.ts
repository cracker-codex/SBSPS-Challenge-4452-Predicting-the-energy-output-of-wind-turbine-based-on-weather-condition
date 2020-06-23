import { Component } from '@angular/core';
import {APP} from './app.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideMenu = APP.SIDE_MENU;
  title = 'dashboard';
  screenWidth: number;
  constructor(private route: Router) {
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }
  async ngOnInit() {
  }
  clickNav(item) {
    this.route.navigate([item.route])
  }
}
