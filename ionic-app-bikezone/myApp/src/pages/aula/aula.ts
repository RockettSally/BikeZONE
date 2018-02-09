import { Component } from '@angular/core';
import { Aula } from './../../models/aula-model';
import { AulaDetailPage } from './../aula-detail/aula-detail';
import { AulaServiceProvider } from './../../providers/aula-service/aula-service';
import { NavController, NavParams, AlertController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-aula',
  templateUrl: 'aula.html',
})
export class AulaPage {
	itens: Array<Aula> = [];
	msg: string = '';
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public aulaService: AulaServiceProvider, private alertCtrl: AlertController, public toastCtrl: ToastController) {
		this.itens = [];
		this.listAulas();
	}
	
	doRefresh(refresher) {
		// console.log('Begin async operation', refresher);
		this.listAulas();

		setTimeout(() => {
	  		// console.log('Async operation has ended');
	  		refresher.complete();
		}, 300);
	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad AulaPage');
	}

	listAulas() {
		this.aulaService.listAulas().then((result: Array<Aula>) =>{
			if(result.length == 0){
				this.msg = 'Não há Aulas marcadas para você.';
			}
			this.itens = result;
		}, (err) =>{
			this.msg = 'Ocorreu um erro de servidor, tente novamente mais tarde';
			let prompt = this.alertCtrl.create({
			subTitle: 'Não foi possível listar as Aulas. Por favor, tente novamente',
			buttons: [{
				text: 'Ok'
			  }]
		  });
		  prompt.present();
		});
	}

	itemTapped(event, item) {
		// console.log('itemTapped: ' + JSON.stringify(item));
		this.navCtrl.push(AulaDetailPage, {
		  aula: item
		});
	}
}
