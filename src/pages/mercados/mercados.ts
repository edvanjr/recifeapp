import { Component, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { InfoMercadoPage } from '../info-mercado/info-mercado';
import { Services } from '../../services/services';

declare var google;

@Component({
  selector: 'page-mercados',
  templateUrl: 'mercados.html',
  providers:[Services]
})

export class MercadosPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  private infoMercado: Object;
  zone = new NgZone({ enableLongStackTrace: false });

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: Services) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  navigate() {
    this.navCtrl.push(InfoMercadoPage, this.infoMercado);
  }

  loadMercados(){
    this.services.listarMercados().subscribe(
      data => {
        for (var index = 0; index < data.length; index++) {
          let element = data[index];
          if(element != "") {
            let latLng = new google.maps.LatLng(element.latitude.replace(",","."), element.longitude.replace(",","."));
          
            let marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: latLng
            });

            let content = "<h4>" + element.nome + "</h4>";          
  
            this.addInfoWindow(marker, content, element);
          }
        }
      },
      error => console.log(error)
    );
  }

  loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(-8.05428, -34.8813);
 
      let mapOptions = {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.loadMercados();
 
    }, (err) => {
      console.log(err);
    });
 
  }

  addInfoWindow(marker, content, data){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
  
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      this.zone.run(()=> this.infoMercado = data);
    });
 
  }

}
