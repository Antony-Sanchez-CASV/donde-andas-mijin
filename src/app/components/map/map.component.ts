import { Component, OnInit } from '@angular/core';

import { MapService } from 'app/services/map.service';
import { environment } from 'environments/environment';
import * as Mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


ngOnInit(){
  (Mapboxgl as  any).accessToken=environment.mapBoxToken;
  this.mapa=new Mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[-78.5017,-0.2143],
    zoom:16,
  });

  this.crearMarcador(-78.5017,-0.2143);
}
  constructor(
    private mapa:Mapboxgl.Map,
  ) {

  }
crearMarcador(lng:number,lat:number){
  const marker=new Mapboxgl.Marker({
    draggable:true,
  }).setLngLat({lng,lat})
  .addTo(this.mapa);
  marker.on('dragend',()=>{
    console.log(marker.getLngLat());
  })
}


}
