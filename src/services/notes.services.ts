import {Injectable} from '@angular/core';

@Injectable()
export class NotesService{
		notes = [
			{id:1, title:'Curso de Desarrollo en Ionic', imagen:'img/prueba.jpg', valor:'10'},
			{id:2, title:'Como ser chevere', imagen:'img/prueba2.jpg', valor:'20'},
			{id:3, title:'PayPhone Developer', imagen:'img/prueba3.jpg', valor:'30'}
		]; 

		public getNotes(){
			return this.notes;
		}

		public getValue(){

		}
}