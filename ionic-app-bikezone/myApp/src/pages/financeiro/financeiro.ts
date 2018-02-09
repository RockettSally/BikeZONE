import { Component } from '@angular/core';
import { Parcela } from './../../models/parcela-model';
import { FinanceiroDetailPage } from './../financeiro-detail/financeiro-detail';
import { FinanceiroServiceProvider } from './../../providers/financeiro-service/financeiro-service';
import { NavController, NavParams, AlertController, ToastController} from 'ionic-angular';

/**
 * Generated class for the FinanceiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class FinanceiroPage {
  itens: Array<Parcela> = [];
  msg: string = '';
  somaTotal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public financeiroService:FinanceiroServiceProvider, private alertCtrl: AlertController, public toastCtrl: ToastController) {
  	this.itens = [];
  	this.listFinanceiro();
  }

  doRefresh(refresher) {
    // console.log('Begin async operation', refresher);
    this.listFinanceiro();

    setTimeout(() => {
      // console.log('Async operation has ended');
      refresher.complete();
    }, 300);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FinanceiroPage');
  }

  listFinanceiro(){
    const userData = JSON.parse(localStorage.getItem('user'));
    // console.log(userData);

  	this.financeiroService.listFinanceiro(userData).then((result: Array<Parcela>) =>{
      // console.log(result);
		if(result.length == 0){
			this.msg = 'Não foram encontradas Parcelas.';
		}
		this.itens = result;
    }, (err) =>{
		this.msg = 'Ocorreu um erro de servidor, tente novamente mais tarde';
		let prompt = this.alertCtrl.create({
			subTitle: 'Não foi possível listar as parcelas. Por favor, tente novamente',
			buttons: [{
				text: 'Ok'
			  }]
		});
      prompt.present();
    });
  }

  itemTapped(event, item) {
    // console.log('itemTapped: ' + JSON.stringify(item));
    this.navCtrl.push(FinanceiroDetailPage, {
      parcela: item
    });
  }

}
