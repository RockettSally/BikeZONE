import { Component } from '@angular/core';
import { Parcela } from './../../models/parcela-model';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinanceiroDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-financeiro-detail',
  templateUrl: 'financeiro-detail.html',
})
export class FinanceiroDetailPage {
  item: Parcela;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.get("parcela");
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FinanceiroDetailPage');
  }

}
