import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {
  texto: string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  searchToggle = false;
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;
  @ViewChild('search',{static:false}) searchElementRef;
  currentLocation = 'Your Location';
  autocompleteInput: string;
  queryWait: boolean;
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
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((postion) =>{
        if (postion) {
          this.lat = postion.coords.latitude;
          this.lng = postion.coords.longitude;
          console.log(this.lat, this.lng);
          this.mapsAPILoader.load().then(() => {
            let geocoder = new google.maps.Geocoder;
            let latlang = {lat: this.lat, lng: this.lng};
            geocoder.geocode({'location': latlang}, (res) => {
              console.log(res);
              if (res[0]) {
                this.currentLocation = res[0].formatted_address;
                console.log(this.currentLocation);
              } else {
                // alert('No Location found');
                this.currentLocation = 'Your Plant';
              }
            });
          });
        }
      });
    }
  }
  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }
  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        {
            componentRestrictions: { country: 'US' },
            types: ['geocode']  // 'establishment' / 'address' / 'geocode'
        });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.invokeEvent(place);
    });
}

invokeEvent(place: Object) {
    this.setAddress.emit(place);
}

  // findAdress(){
  //   this.mapsAPILoader.load().then(() => {
  //        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
  //        autocomplete.addListener("place_changed", () => {
  //          this.ngZone.run(() => {
  //            // some details
  //            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  //            console.log(place.formatted_address,place.website,place.name,place.address_components[place.address_components.length - 1].long_name)
  //            //set latitude, longitude and zoom
  //            this.lat = place.geometry.location.lat();
  //            this.lng = place.geometry.location.lng();
  //            this.zoom = 12;
  //          });
  //        });
  //      });
  //  }
}
