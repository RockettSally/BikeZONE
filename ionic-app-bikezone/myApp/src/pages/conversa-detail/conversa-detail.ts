import { Component } from '@angular/core';
import { Conversa } from './../../models/conversa-model';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConversaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-conversa-detail',
  templateUrl: 'conversa-detail.html',
})
export class ConversaDetailPage {
  conversa : Conversa;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.conversa = navParams.get("conversa");
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ConversaDetailPage');
  }

}
