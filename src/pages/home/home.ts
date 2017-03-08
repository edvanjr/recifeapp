import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MuseusPage } from '../museus/museus';
import { ShoppingsPage } from '../shoppings/shoppings';
import { MercadosPage } from '../mercados/mercados';
import { FeirasPage } from '../feiras/feiras';
import { TeatrosPage } from '../teatros/teatros';
import { PontesPage } from '../pontes/pontes';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  museusPage: any = MuseusPage;

  constructor(public navCtrl: NavController) {

  }

  navigate(tela) {
    if(tela === 'museus') {
      this.navCtrl.push(MuseusPage);
    } else if (tela === 'shoppings') {
      this.navCtrl.push(ShoppingsPage);
    } else if (tela === 'mercados') {
      this.navCtrl.push(MercadosPage);
    } else if (tela === 'feiras') {
      this.navCtrl.push(FeirasPage);
    } else if (tela === 'teatros') {
      this.navCtrl.push(TeatrosPage);
    } else if (tela === 'pontes') {
      this.navCtrl.push(PontesPage);
    }
    
  }

}
