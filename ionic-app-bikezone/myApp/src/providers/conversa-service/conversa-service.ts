import { HttpServiceProvider } from './../http-service/http-service';
import { Conversa } from './../../models/conversa-model';
import { Injectable } from '@angular/core';

@Injectable()
export class ConversaServiceProvider {

	private itens: Array<Conversa>;

	constructor(public http: HttpServiceProvider) {
	    // console.log('Hello ClientServiceProvider Provider');
	    this.itens = [];
	}

	listConversas(credentials){
	this.itens = [];

		return new Promise((resolve, reject) =>{
			this.http.get('buscarConversas').subscribe(res =>{
				res.forEach(conversa => {
					console.log(conversa);
	            	this.itens.push(conversa);
	          	});
		        resolve(this.itens);
		    }, (err) =>{
		        reject(err);
		    });
		});
	}

	getLastConversa(){
		return new Promise((resolve, reject) =>{ 
			this.http.get('buscarUltimaConversa').subscribe(res =>{
				resolve(res);
			}, (err) =>{
				reject(err);
			});
		});
	}
	
	getConversaSelecionada(credentials){
		return new Promise((resolve, reject) =>{
			this.http.get('buscarConversaSelecionada' + '/' + credentials.notificacaoId).subscribe(res =>{
				// console.log(JSON.stringify(res));
					resolve(res);
				}, (err) =>{
					reject(err);
				});
		});
	}

	// parseConversa(conversa){
		// return new Conversa(conversa.nome, conversa.dataContato, conversa.descricao, conversa.tipo);
	// }

}
