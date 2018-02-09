import { Loader } from '../utils/loader';
import { ConversaServiceProvider } from './../providers/conversa-service/conversa-service';
import { FinanceiroServiceProvider } from './../providers/financeiro-service/financeiro-service';

import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform, Events, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AulaPage } from '../pages/aula/aula';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import { ConversaPage } from '../pages/conversa/conversa';
import { NotasPage } from '../pages/notas/notas';

import { Conversa } from '../models/conversa-model'; 
import { ConversaDetailPage } from '../pages/conversa-detail/conversa-detail';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  
  pages: Array<{ id: number, title: string, component: any, icon: string }>;

  // public username: string = '';
  
  username: string = '';
  empresa: string = '';
  
  // userData = JSON.parse(localStorage.getItem('user'));
  
  loginData: any;

  allowClose: any;
  lastBack: any;

  constructor(public app: App, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private loader: Loader, conversaServiceProvider:ConversaServiceProvider, financeiroServiceProvider:FinanceiroServiceProvider, public events: Events, public toastCtrl: ToastController, private oneSignal: OneSignal, public conversaService: ConversaServiceProvider, private alertCtrl: AlertController, public authService: AuthServiceProvider) {
    
	this.initializeApp();
	
	const userData = JSON.parse(localStorage.getItem('user'));
	
	if (userData) {
		
		this.username = userData.nome;
		this.empresa = userData.empresa;
		this.rootPage = HomePage;
		
		  if(localStorage.getItem("userId") || localStorage.getItem("userId") != 'undefined'){
			console.log("Token Already Exists, ignoring OneSignal Token acquisition\n" + "pushToken: " + localStorage.getItem("pushToken") + '\n userId: ' + localStorage.getItem("userId"));
		  } else { 
		
		console.log("Acquiring OneSignal Token!");
		let oneSignalIds: any = {};
		oneSignalIds.pushToken = localStorage.getItem("pushToken");
		
		this.authService.setOneSignalToken(oneSignalIds).then((result: any) =>{
			// console.log(JSON.stringify(result));
			localStorage.setItem("userId",result.userId);
			return;
		}, (err) =>{
		  // let prompt = this.alertCtrl.create({
			// subTitle: 'Não foi possível adquirir o token do OneSignal.',
			// buttons: [{
				// text: 'Ok'
			  // }]
		  // });
		  // prompt.present();
		  return;
		});
	  }
	  
    } else {
      this.rootPage = LoginPage;
    }
	
    this.pages = [{ id: 0, title: 'Início', component: HomePage, icon: 'home' },
                  { id: 6, title: 'Aulas', component: AulaPage, icon: 'book' },
                  { id: 7, title: 'Financeiro', component: FinanceiroPage, icon: 'cash' },
                  { id: 8, title: 'Conversas', component: ConversaPage, icon: 'chatbubbles' },
                  { id: 9, title: 'Notas e Boletins', component: NotasPage, icon: 'bookmarks' },];
    // this.validateProfile(userData, true);
    //
    // this.events.subscribe("userLoggedIn", (userLogged) => {
    //   // console.log('Event userLoggedIn: ' + JSON.stringify(userLogged));
    //   this.validateProfile(userLogged, false);
    // });
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      //back button handle (Registration of push in Android and Windows Phone)
      this.platform.registerBackButtonAction(() => {
        const overlay = this.app._appRoot._overlayPortal.getActive();
        const nav = this.app.getActiveNav();
        const closeDelay = 2500;
        const spamDelay = 500;

        if(overlay && overlay.dismiss) {
          overlay.dismiss();
        } else if(nav.canGoBack()) {
          nav.pop();
        } else if(this.nav.getActive().component != HomePage && this.nav.getActive().component != LoginPage) {
          nav.setRoot(HomePage); 
        } else if(Date.now() - this.lastBack > spamDelay && !this.allowClose) {
          this.allowClose = true;
          let toast = this.toastCtrl.create({
            message: 'Pressione novamente para sair', //this.translate.instant("general.close_toast"),
            duration: closeDelay,
            dismissOnPageChange: true
          });
          toast.onDidDismiss(() => {
            this.allowClose = false;
          });
          toast.present();
        } else if(Date.now() - this.lastBack < closeDelay && this.allowClose) {
          this.platform.exitApp();
        }
        this.lastBack = Date.now();
      });	
      
      if (this.platform.is('cordova')) {
        this.oneSignal.startInit('b50129a2-4237-4443-b58f-594b8c6c7767', '913549107929');
        
		this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
		
		// console.log(JSON.stringify(this.userData));
		
		// Retrieve the OneSignal user id and the device token
		this.oneSignal.getIds().then((ids) =>{ 
			localStorage.setItem("pushToken",ids.pushToken);
			// localStorage.setItem("userId",ids.userId);
			// console.log('getIds: ' + JSON.stringify(ids));
		});
		
      // When a push notification is opened by the user
      // handle how the application will respond
      
	  this.oneSignal.handleNotificationOpened().subscribe((msg) => {
        // Log data received from the push notification service
        // console.log('Notification opened!');
        // console.dir(JSON.stringify(msg));
		
		// let credentials = msg.notification.payload.additionalData.notificacaoSistemaId;
		const userData = JSON.parse(localStorage.getItem('user'));
		userData.notificacaoId = msg.notification.payload.additionalData.notificacaoSistemaId
		// console.log(JSON.stringify(userData));

		this.conversaService.getConversaSelecionada(userData).then((result: Conversa) =>{		 
				this.nav.push(ConversaDetailPage, {
					conversa: result
				});
			},(err) =>{
				let prompt = this.alertCtrl.create({
					subTitle: 'Não foi possível listar as Conversas. Por favor, tente novamente',
					buttons: [{
					text: 'Ok'
					}]
				});
				
				prompt.present();
			});
		return;
		 
      });

        this.oneSignal.endInit();
      } else {
        // Desabilita o plugin do OneSignal quando feito 'ionic serve' para não estourar exception.
        console.log("OneSignal Notifications Provider is disabled in browser testing mode");
      }
    });
  }

  openPage(page) {
      this.nav.setRoot(page.component);
  }

  logout() {
    this.loader.showStandardLoader();
    localStorage.removeItem("user");
    localStorage.removeItem("tokenAuth");
	this.username = '';
	this.empresa = '';
    let that: any = this;
    setTimeout(function () {
      that.loader.hideLoader();
      that.nav.setRoot(LoginPage);
      that.nav.popToRoot();
    }, 1000);
  }
}
