import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Services } from '../../services/services';

@Component({
  selector: 'page-info-ponte',
  templateUrl: 'info-ponte.html',
  providers: [Services]
})
export class InfoPontePage {

  private infoPonte: Object;
  private comentarios: Object[] = [];
  private comentario: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: Services) {
    this.infoPonte = navParams.data;
    this.comentario = {'nome':'', 'comentario':'', 'ponteId': this.infoPonte['id']};
    this.listarComentariosPonte(this.infoPonte['id']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoMuseuPage');
  }

  listarComentariosPonte(id) {
    this.services.listarComentariosPonte(id).subscribe(
      data => this.comentarios = data,
      error => console.log(error)
    );
  }

 salvarComentarioPonte() {
   this.services.salvarComentarioPonte(this.comentario).subscribe(
     data => {
       this.listarComentariosPonte(this.infoPonte['id'])
       this.comentario = {'nome':'', 'comentario':'', 'ponteId': this.infoPonte['id']};
     },
     error => console.log(error)
   );
 }

}
