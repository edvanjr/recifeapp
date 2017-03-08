import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Services } from '../../services/services';

@Component({
  selector: 'page-info-teatro',
  templateUrl: 'info-teatro.html',
  providers: [Services]
})

export class InfoTeatroPage {

  private infoTeatro: Object;
  private comentarios: Object[] = [];
  private comentario: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: Services) {
    this.infoTeatro = navParams.data;
    this.comentario = {'nome':'', 'comentario':'', 'teatroId': this.infoTeatro['id']};
    this.listarComentariosTeatro(this.infoTeatro['id']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoTeatroPage');
  }

  listarComentariosTeatro(id) {
    this.services.listarComentariosTeatro(id).subscribe(
      data => this.comentarios = data,
      error => console.log(error)
    );
  }

 salvarComentarioTeatro() {
   this.services.salvarComentarioTeatro(this.comentario).subscribe(
     data => {
       this.listarComentariosTeatro(this.infoTeatro['id'])
       this.comentario = {'nome':'', 'comentario':'', 'teatroId': this.infoTeatro['id']};
     },
     error => console.log(error)
   );
 }

}
