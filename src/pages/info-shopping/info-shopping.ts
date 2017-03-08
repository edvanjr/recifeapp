import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Services } from '../../services/services';

@Component({
  selector: 'page-info-shopping',
  templateUrl: 'info-shopping.html',
  providers: [Services]
})

export class InfoShoppingPage {

  private infoShopping: Object;
  private comentarios: Object[] = [];
  private comentario: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: Services) {
    this.infoShopping = navParams.data;
    this.comentario = {'nome':'', 'comentario':'', 'shoppingId': this.infoShopping['id']};
    this.listarComentariosShopping(this.infoShopping['id']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoShoppingPage');
  }

  listarComentariosShopping(id) {
    this.services.listarComentariosShopping(id).subscribe(
      data => this.comentarios = data,
      error => console.log(error)
    );
  }

 salvarComentarioShopping() {
   this.services.salvarComentarioShopping(this.comentario).subscribe(
     data => {
       this.listarComentariosShopping(this.infoShopping['id'])
       this.comentario = {'nome':'', 'comentario':'', 'shoppingId': this.infoShopping['id']};
     },
     error => console.log(error)
   );
 }

}
