import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Services } from '../../services/services';

@Component({
  selector: 'page-info-museu',
  templateUrl: 'info-museu.html',
  providers: [Services]
})

export class InfoMuseuPage {
  private infoMuseu: Object;
  private comentarios: Object[] = [];
  private comentario: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: Services) {
    this.infoMuseu = navParams.data;
    this.comentario = {'nome':'', 'comentario':'', 'museuId': this.infoMuseu['id']};
    this.listarComentariosMuseu(this.infoMuseu['id']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoMuseuPage');
  }

  listarComentariosMuseu(id) {
    this.services.listarComentariosMuseu(id).subscribe(
      data => this.comentarios = data,
      error => console.log(error)
    );
  }

 salvarComentarioMuseu() {
   this.services.salvarComentarioMuseu(this.comentario).subscribe(
     data => {
       this.listarComentariosMuseu(this.infoMuseu['id'])
       this.comentario = {'nome':'', 'comentario':'', 'museuId': this.infoMuseu['id']};
     },
     error => console.log(error)
   );
 }

}
