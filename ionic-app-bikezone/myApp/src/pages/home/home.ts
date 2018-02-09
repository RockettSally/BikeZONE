import { Component } from '@angular/core';
import { Aula } from './../../models/aula-model';
import { Conversa } from './../../models/conversa-model';
import { AulaDetailPage } from './../aula-detail/aula-detail';
import { ConversaDetailPage } from './../conversa-detail/conversa-detail';
import { AulaServiceProvider } from './../../providers/aula-service/aula-service';
import { ConversaServiceProvider } from './../../providers/conversa-service/conversa-service';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aula : Aula;
  conversa: Conversa;
  loginData: any = {'nome': null, 'email': null, 'empresa':null};
  msgAula: string = '';
  msgConversa: string = '';

  constructor(public navCtrl: NavController, public aulaService: AulaServiceProvider, private alertCtrl: AlertController, public conversaService: ConversaServiceProvider) {
    const userData = JSON.parse(localStorage.getItem('user'));
    // console.log(userData);

    this.loginData.nome = userData.nome;
    this.loginData.email = userData.email;
	this.loginData.empresa = userData.empresa;

    this.getLastAula();
    this.getLastConversa(); 
  }
  
  ionViewDidEnter(){
	// this.getLastAula();
    // this.getLastConversa();
  }

  aulaTapped(event, aula){
    this.navCtrl.push(AulaDetailPage, {
      aula: aula
    });
  }

  conversaTapped(event, conversa){
    this.navCtrl.push(ConversaDetailPage, {
      conversa: conversa
    });
  }

  getLastAula() {
      this.aulaService.getLastAula().then((result: Aula) =>{
        this.aula = result;
      }, (err) =>{
		this.msgAula = 'Ocorreu um erro de servidor, tente novamente mais tarde';
		let prompt = this.alertCtrl.create({
		  subTitle: 'Não foi possível listar as Aulas. Por favor, tente novamente',
		  buttons: [{
			  text: 'Ok'
			}]
		});
		prompt.present();
      });
      return;
    }

	getLastConversa(){
      this.conversaService.getLastConversa().then((result: Conversa) =>{
        this.conversa = result;
      }, (err) =>{
		this.msgConversa = 'Ocorreu um erro de servidor, tente novamente mais tarde';
        let prompt = this.alertCtrl.create({
          subTitle: 'Não foi possível listar as Conversas. Por favor, tente novamente',
          buttons: [{
              text: 'Ok'
            }]
        });
        prompt.present();
      });
      return;
    }

}
