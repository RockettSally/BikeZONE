import { Component } from '@angular/core';
import { Conversa } from './../../models/conversa-model';
import { ConversaDetailPage } from './../conversa-detail/conversa-detail';
import { ConversaServiceProvider } from './../../providers/conversa-service/conversa-service';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ConversaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-conversa',
  templateUrl: 'conversa.html',
})
export class ConversaPage {
  itens : Array<Conversa> = [];
  msg: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public conversaService: ConversaServiceProvider, private alertCtrl: AlertController, public toastCtrl: ToastController) {
  	this.itens = [];
  	this.listConversas();
  }

  doRefresh(refresher) {
    // console.log('Begin async operation', refresher);
    this.listConversas();

    setTimeout(() => {
      // console.log('Async operation has ended');
      refresher.complete();
    }, 300);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ConversaPage');
  }

  listConversas(){
    const userData = JSON.parse(localStorage.getItem('user'));
    // console.log(userData);

    this.conversaService.listConversas(userData).then((result: Array<Conversa>) =>{
		if(result.length == 0) {
			this.msg = 'Não há Conversas registradas';
		}
		this.itens = result;
    }, (err) =>{
		this.msg = 'Ocorreu um erro de servidor, tente novamente mais tarde';
			let prompt = this.alertCtrl.create({
			subTitle: 'Não foi possível listar as Conversas. Por favor, tente novamente',
			buttons: [{
				text: 'Ok'
			  }]
			});
		prompt.present();
    });
  }

  itemTapped(event, item){
  	// console.log('itemTapped: ' + JSON.stringify(item));
    this.navCtrl.push(ConversaDetailPage, {
      conversa: item
    });
  }

}
