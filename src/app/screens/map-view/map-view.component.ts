import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  texto: string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  searchToggle = false;
  @Input() adressType: string;
  currentLocation = 'Your Location';
  predDate: any ;
  windSpeed = '--';
  humidityData = '--';
  activePower = '--';
  windDirection = '';
  worldWeather = 'https://api.worldweatheronline.com/premium/v1/weather.ashx';
  placeUrl = 'https://api.opencagedata.com/geocode/v1/json';
  key = '';
  key0 = '';
  constructor(private route: Router, public mapsAPILoader:MapsAPILoader, public ngZone: NgZone,private http: HttpClient) { }
  ngOnInit() {
    // this.findAdress();
  }
  removeSearch() {
    this.searchToggle = false;
  }
  getSearch() {
    this.searchToggle = true;
  }
  clickNav(item) {
    this.route.navigate([item.route])
  }
  toPage() {
    this.route.navigate(['analytics']);
  }
  addEvent($event) {
    console.log($event.value);
    this.predDate = new Date($event.value).toISOString().split('T')[0];
    console.log(this.predDate);
  }
  predict() {
    if (this.predDate && this.lat && this.lng) {
      console.log('predict');
      // tslint:disable-next-line: no-unused-expression
      console.log(this.worldWeather + `?key=${this.key}&q=${this.lat},${this.lng}&date=${this.predDate}&format=json`);
      this.http.get(this.worldWeather + `?key=${this.key}&q=${this.lat},${this.lng}&format=json&date=${this.predDate}`)
      .subscribe((res: any) => {
        this.windSpeed = res.data.current_condition[0].windspeedKmph;
        this.windDirection = res.data.current_condition[0].winddirDegree;
        this.humidityData = res.data.current_condition[0].humidity;
        console.log(this.windSpeed, this.windDirection, this.humidityData);
        // tslint:disable-next-line:max-line-length
        this.http.post('http://127.0.0.1:5000/predict', {windSpeed: this.windSpeed, WindDirection: this.windDirection},{responseType: 'json'})
        .subscribe((response) => {
          console.log(response);
        });
      }, err => {
        console.log(err);
      });
    } else {
      alert('Choose date and location Please');
    }
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((postion) =>{
        if (postion) {
          this.lat = postion.coords.latitude;
          this.lng = postion.coords.longitude;
          console.log(this.lat, this.lng);
          this.http.get(this.placeUrl + `?key=${this.key0}&q=${this.lat},${this.lng}`)
          .subscribe((res: any) => {
            console.log(res.results[0].formatted);
            this.currentLocation = res.results[0].formatted;
          });
        }
      });
    }
  }
}
