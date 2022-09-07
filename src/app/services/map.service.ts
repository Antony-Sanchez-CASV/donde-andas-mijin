import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);

  style = `mapbox://styles/mapbox/streets-v11`;
  zoom = 15;
  lat = -0.2143;
  lng = -78.5017;
  constructor( private map:mapboxgl.Map) {
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lat,this.lng]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    }
}
