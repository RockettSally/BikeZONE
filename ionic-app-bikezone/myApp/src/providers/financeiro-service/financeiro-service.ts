import { HttpServiceProvider } from './../http-service/http-service';
import { Parcela } from './../../models/parcela-model';
import { Injectable } from '@angular/core';

@Injectable()
export class FinanceiroServiceProvider {

	private itens: Array<Parcela>;
	

	constructor(public http: HttpServiceProvider) {
	    // console.log('Hello ClientServiceProvider Provider');
	    this.itens = [];
  	}

  	listFinanceiro(credentials){
			this.itens = [];
			return new Promise((resolve, reject) =>{
				this.http.get('buscarParcelas').subscribe(res =>{
					res.forEach(parcela => {
		            	this.itens.push(parcela);
		          	});
			        resolve(this.itens);
			    }, (err) =>{
			        reject(err);
			    });
			});
		}

	// parseFinanceiro(parcelaJSON: any){
		// return new Parcela(parseFloat(parcelaJSON.valor).toFixed(2), parseFloat(parcelaJSON.desconto).toFixed(2), parcelaJSON.formaPagamento, parcelaJSON.vencimento, parcelaJSON.dataPagamento, parcelaJSON.categoria, parcelaJSON.estaPendente, parcelaJSON.descricao, parseFloat(parcelaJSON.valorPago).toFixed(2));
		// parseFloat(parcelaJSON.desconto).toFixed(2)
	// }



}
