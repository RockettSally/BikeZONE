import { Component } from '@angular/core';
import { Aula } from './../../models/aula-model';
import { AulaServiceProvider } from './../../providers/aula-service/aula-service';
import { NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the AulaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-aula-detail',
  templateUrl: 'aula-detail.html',
})
export class AulaDetailPage {
  item : Aula;

  constructor(public navCtrl: NavController, public aulaService: AulaServiceProvider, private alertCtrl: AlertController,  public navParams: NavParams) {
    this.item = this.navParams.get('aula');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AulaDetailPage');
  }
  
  	itemTapped(event, itemId) {	
		console.log('itemTapped: ' + itemId);
		this.aulaService.getAulaSelecionada(itemId).then((result: Aula) =>{
			// console.log(JSON.stringify(result));
			this.navCtrl.push(AulaDetailPage, {
				aula: result
				});
			}, (err) =>{
			let prompt = this.alertCtrl.create({
				subTitle: 'Não foi possível listar as Aulas. Por favor, tente novamente',
				buttons: [{
					text: 'Ok'
				}]
		  });
		  prompt.present();
		});
	}
}
