import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SaleRequestModel} from '../../../src/Models/SaleRequestModel';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  value = "0";
  note = {id:null, valor:this.value, telefono:null};
  telefono:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  	this.value = this.navParams.get("value");
  	console.log(this.value);
  	this.note.valor = this.value;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  
 public submitForm($ev, valoracobrar: any, telefono:any) {

 	console.log(valoracobrar);
 	console.log(this.telefono);
 	valoracobrar = this.value;
      let newSale = new SaleRequestModel();
      var total = valoracobrar * 100;
      newSale.phoneNumber = this.telefono;
      newSale.countryCode = "593";
      newSale.clientTransactionId = this.CreateGuid();
      newSale.amount = total;
      newSale.amountWithoutTax = total;
	  var respuesta = this.hacerpost(newSale);
	  console.log(respuesta);
	  window.open('https://z7y9g.app.goo.gl/RtQw', "_system");
	}

  CreateGuid() {  
    function _p8(s) {  
       var p = (Math.random().toString(16)+"000000000").substr(2,8);  
       return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
    }  
    return _p8(false) + _p8(true) + _p8(true) + _p8(false);  
 }  


  public hacerpost(venta: SaleRequestModel){
  	let headers = new Headers({'Authorization' : 'Bearer GO9GhyFvTAEvHUNNQdx3bUjbMXB6nSXL2nxIN771-HMP2cl7rnwirRwn4eaNHq4HRbdoPWo9OKrzlw02zHh7E6a5TU7qk1zVEOF9CGYotKp04asjgi6XChRMYY4JWKi7kEXh6-Nhu4b2lxDbr1Wlo43lnlecsw0Vdzm4RI7AidCrUVkOsc9DT7IuoE4YhUM7aB-yVwMbju5sQ4pGJn0rultcbdGcJNHhZBlUq7dbKq8MH2e4pTb6ohLfu710kiRm'});
  	let options = new RequestOptions({headers : headers});

  	return this.http
  	.post('https://payphone-payments-panama.azurewebsites.net/api/Sale',venta, options)
  	.map(response => response.json()) 
    .subscribe(data => console.log('Que cool se envio el pago ', data),
               error => console.error(`La transacción no se completo debido a que: ${error._body}`));

  }	
}
