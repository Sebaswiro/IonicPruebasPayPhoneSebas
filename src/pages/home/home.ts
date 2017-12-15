import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NotesService} from '../../services/notes.services';
import {DetailPage} from '../detail/detail';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	notes = [];
	@ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public notesService : NotesService) {
  	this.notes = notesService.getNotes();
  }

  public goToDetail(valor:any){
    var value:any = valor;
    console.log(value);
  	this.navCtrl.push(DetailPage, {value: valor});
  }

}
