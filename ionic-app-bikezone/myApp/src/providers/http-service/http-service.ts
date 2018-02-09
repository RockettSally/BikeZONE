import { Loader } from '../../utils/loader';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class HttpServiceProvider {

  // ** ENDPOINT de Produção **
  endpoint: String = 'https://app.sistemaquality.com.br/api/';

  // ** ENDPOINT de Homologação
  // endpoint: String ='http://35.167.72.46:9200/api/';

  // ** ENDPOINT local (alterar para o IP da sua maquina ou 'localhost')
  // endpoint: String ='http://192.168.100.59:8080/jam-music/api/';

  constructor(public http: Http, private loader: Loader) {
    // console.log('Hello HttpServiceProvider Provider');
  }

  get(resource) {
    this.loader.showStandardLoader();
    return this.http.get(this.endpoint + resource , {headers: this.getHeaders()})
      // .timeout(30000)
      .map(resp => resp.json())
      .finally(() => {

        this.loader.hideLoader();
      });
  }

  post(resource, body) {
    this.loader.showStandardLoader();
    return this.http.post(this.endpoint + resource, body, {headers: this.getHeaders()})
      // .timeout(30000)
      .map(resp => resp.json())
      .finally(() => {
        this.loader.hideLoader();
      });
  }

  getHeaders() {
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Basic ' + localStorage.getItem('tokenAuth'));

    return headers;
  }

}
