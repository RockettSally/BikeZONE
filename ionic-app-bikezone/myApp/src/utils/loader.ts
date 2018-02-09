import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class Loader {

    loader: any = null;

    constructor(private loadingCtrl: LoadingController) {
    }

    private showLoadingHandler(message) {
        if (this.loader == null) {
            this.loader = this.loadingCtrl.create({
                content: message
            });
            this.loader.present();
        } else {
            this.loader.data.content = message;
        }
    }
    
    private hideLoadingHandler() {
        if (this.loader != null) {
            this.loader.dismiss();
            this.loader = null;
        }
    }
    
    public showStandardLoader() {
        let message = "Por favor aguarde...";
        this.showLoadingHandler(message);
    }

    public showLoader(message) {
        this.showLoadingHandler(message);
    }

    public hideLoader() {
        this.hideLoadingHandler();
    }

}
