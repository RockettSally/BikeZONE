import { Component, ViewChild } from '@angular/core';
import { AlertController, MenuController, NavController, NavParams, Events } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild("loginInput") loginInput;
  tipoLogin: string = 'representante';
  user: any = {'email': '', 'senha': ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider, private alertCtrl: AlertController, private menu: MenuController, public events: Events) {
    this.menu.enable(false);
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    setTimeout(() => {
        this.loginInput.setFocus();
      }, 500);
    }

  ionViewCanEnter(){
    // console.log('ionViewCanEnter LoginPage');
    this.user = {'email': '', 'senha': ''};
  }

  ionViewWillLeave() {
    this.menu.enable(true);
    this.menu.swipeEnable(true);
  }

  login() {
    let credentials = this.user;
    let tokenAuth = btoa(this.user.email+":"+this.user.senha);
    localStorage.setItem("tokenAuth",tokenAuth);
	
	  credentials.pushToken = localStorage.getItem('pushToken');
	  //console.log(JSON.stringify(credentials));

    this.authServiceProvider.auth(credentials).then((resultLogin: any) =>{
      this.events.publish("userLoggedIn", resultLogin);
	    let userData: any = {}
	    userData.nome = resultLogin.nome
	    userData.empresa = resultLogin.empresa
	    // console.log(JSON.stringify(resultLogin));
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("userId", resultLogin.userId); 
      this.navCtrl.setRoot(HomePage);
      return;
    }, (err) =>{
      let prompt = this.alertCtrl.create({
        subTitle: 'Não foi possível efetuar o Login. Por favor, tente novamente',
        buttons: [{
            text: 'Ok'
          }]
      });
      prompt.present();
      return;
    });
  }

}
