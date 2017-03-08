import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Services } from '../../services/services';

@Component({
  selector: 'page-info-feiras',
  templateUrl: 'info-feiras.html',
  providers: [Services]
})

export class InfoFeirasPage {

  private infoFeira: Object;
  private comentarios: Object[] = [];
  private comentario: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: Services) {
    this.infoFeira = navParams.data;
    this.comentario = {'nome':'', 'comentario':'', 'feiraId': this.infoFeira['id']};
    this.listarComentariosFeira(this.infoFeira['id']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoFeirasPage');
  }

  listarComentariosFeira(id) {
    this.services.listarComentariosFeira(id).subscribe(
      data => this.comentarios = data,
      error => console.log(error)
    );
  }

 salvarComentarioFeira() {
   this.services.salvarComentarioFeira(this.comentario).subscribe(
     data => {
       this.listarComentariosFeira(this.infoFeira['id'])
       this.comentario = {'nome':'', 'comentario':'', 'museuId': this.infoFeira['id']};
     },
     error => console.log(error)
   );
 }

}
