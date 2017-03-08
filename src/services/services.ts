import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
  
export class Services {  
    headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    options = new RequestOptions({headers: this.headers});
    api = 'http://54.215.191.231:3234';

    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    listarMuseus() {
        var url = this.api + '/museus';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    listarComentariosMuseu(id) {
        var url = this.api + '/comentariosMuseu/'+id;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    salvarComentarioMuseu(comentario) {
        var url = "https://cors-anywhere.herokuapp.com/" + this.api + '/comentarioMuseu';
        var response = this.http.post(url, comentario, this.options).map(res => res);
        return response;
    }

    listarShoppings() {
        var url = this.api + '/shoppings';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    listarComentariosShopping(id) {
        var url = this.api + '/comentariosShopping/'+id;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    salvarComentarioShopping(comentario) {
        var url = "https://cors-anywhere.herokuapp.com/" + this.api + '/comentarioShopping';
        var response = this.http.post(url, comentario, this.options).map(res => res);
        return response;
    }

    listarMercados() {
        var url = this.api + '/mercados';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    listarComentariosMercado(id) {
        var url = this.api + '/comentariosMercado/'+id;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    salvarComentarioMercado(comentario) {
        var url = "https://cors-anywhere.herokuapp.com/" + this.api + '/comentarioMercado';
        var response = this.http.post(url, comentario, this.options).map(res => res);
        return response;
    }

    listarFeiras() {
        var url = this.api + '/feiras';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    listarComentariosFeira(id) {
        var url = this.api + '/comentariosFeira/'+id;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    salvarComentarioFeira(comentario) {
        var url = "https://cors-anywhere.herokuapp.com/" + this.api + '/comentarioFeira';
        var response = this.http.post(url, comentario, this.options).map(res => res);
        return response;
    }

    listarTeatros() {
        var url = this.api + '/teatros';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    listarComentariosTeatro(id) {
        var url = this.api + '/comentariosTeatro/'+id;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    salvarComentarioTeatro(comentario) {
        var url = "https://cors-anywhere.herokuapp.com/" + this.api + '/comentarioTeatro';
        var response = this.http.post(url, comentario, this.options).map(res => res);
        return response;
    }

    listarPontes() {
        var url = this.api + '/pontes';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    listarComentariosPonte(id) {
        var url = this.api + '/comentariosPonte/'+id;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    salvarComentarioPonte(comentario) {
        var url = "https://cors-anywhere.herokuapp.com/" + this.api + '/comentarioPonte';
        var response = this.http.post(url, comentario, this.options).map(res => res);
        return response;
    }
}