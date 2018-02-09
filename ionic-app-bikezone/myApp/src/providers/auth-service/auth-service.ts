import { HttpServiceProvider } from '../http-service/http-service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpServiceProvider) {
    // console.log('Hello AuthServiceProvider Provider');
  }

  auth(credentials) {
    return new Promise((resolve, reject) =>{
      this.http.post('authenticate', JSON.stringify(credentials)).subscribe(res =>{
        // console.log("aqui")
        // console.log(res);
        resolve(res);
      }, (err) =>{
        // console.log(err);
        reject(err);
      });
    });
  }
  
  setOneSignalToken(oneSignalIds){
	return new Promise((resolve, reject) =>{
      this.http.post('setOneSignalToken', JSON.stringify(oneSignalIds)).subscribe(res =>{
        // console.log(res);
        resolve(res);
      }, (err) =>{
        // console.log(err);
        reject(err);
      });
    }); 
  }
}
