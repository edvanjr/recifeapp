import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Services } from '../../services/services';

@Component({
  selector: 'page-info-mercado',
  templateUrl: 'info-mercado.html',
  providers: [Services]
})

export class InfoMercadoPage {

  private infoMercado: Object;
  private comentarios: Object[] = [];
  private comentario: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: Services) {
    this.infoMercado = navParams.data;
    this.comentario = {'nome':'', 'comentario':'', 'mercadoId': this.infoMercado['id']};
    this.listarComentariosMercado(this.infoMercado['id']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoMercadoPage');
  }

  listarComentariosMercado(id) {
    this.services.listarComentariosMercado(id).subscribe(
      data => this.comentarios = data,
      error => console.log(error)
    );
  }

 salvarComentarioMercado() {
   this.services.salvarComentarioMercado(this.comentario).subscribe(
     data => {
       this.listarComentariosMercado(this.infoMercado['id'])
       this.comentario = {'nome':'', 'comentario':'', 'mercadoId': this.infoMercado['id']};
     },
     error => console.log(error)
   );
 }

}
