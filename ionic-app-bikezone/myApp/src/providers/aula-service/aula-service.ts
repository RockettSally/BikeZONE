import { HttpServiceProvider } from './../http-service/http-service';
import { Aula } from './../../models/aula-model';
import { Injectable } from '@angular/core';

@Injectable()
export class AulaServiceProvider {

	private itens: Array<Aula>;

	constructor(public http: HttpServiceProvider) {
	    // console.log('Hello ClientServiceProvider Provider');
	    this.itens = [];
  	}

	listAulas(){
		this.itens = [];

		return new Promise((resolve, reject) =>{
			this.http.get('buscarAulas').subscribe(res =>{
				res.forEach(aula => {
	            	this.itens.push(aula);
	          	});
				// console.log(JSON.stringify(this.itens));
		        resolve(this.itens);
		    }, (err) =>{
		        reject(err);
		    });
		});
	}

	getLastAula(){
		return new Promise((resolve, reject) =>{
			this.http.get('buscarProximaAula').subscribe(res =>{
					// console.log(JSON.stringify(res));
					resolve(res);
				}, (err) =>{
					reject(err);
				});
		});
	}
	
	getAulaSelecionada(idAula){
		// console.log(idAula);
		return new Promise((resolve, reject) =>{
			this.http.get('buscarAulaSelecionada' + '/' + idAula).subscribe(res =>{
			// console.log(JSON.stringify(res));
				resolve(res);
			}, (err) =>{
				reject(err);
			});
		});
	}
}
