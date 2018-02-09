import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { OneSignal } from '@ionic-native/onesignal';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AulaPage } from '../pages/aula/aula';
import { AulaDetailPage } from '../pages/aula-detail/aula-detail';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import { FinanceiroDetailPage } from '../pages/financeiro-detail/financeiro-detail';
import { ConversaPage } from '../pages/conversa/conversa';
import { ConversaDetailPage } from '../pages/conversa-detail/conversa-detail';
import { NotasPage } from '../pages/notas/notas';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { AulaServiceProvider } from '../providers/aula-service/aula-service';
import { ConversaServiceProvider } from '../providers/conversa-service/conversa-service';
import { FinanceiroServiceProvider } from '../providers/financeiro-service/financeiro-service';
import { NotasServiceProvider } from '../providers/notas-service/notas-service';
import { Loader } from './../utils/loader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AulaPage,
    AulaDetailPage,
    FinanceiroPage,
    FinanceiroDetailPage,
    ConversaPage,
    ConversaDetailPage,
	NotasPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AulaPage,
    AulaDetailPage,
    FinanceiroPage,
    FinanceiroDetailPage,
    ConversaPage,
    ConversaDetailPage,
	NotasPage
  ],
  providers: [
    AuthServiceProvider,
    HttpServiceProvider,
    AulaServiceProvider,
    ConversaServiceProvider,
    FinanceiroServiceProvider,
	NotasServiceProvider,
    Loader,
    StatusBar,
    SplashScreen,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
