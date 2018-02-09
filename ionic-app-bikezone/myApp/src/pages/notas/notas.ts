import { Component } from '@angular/core';
import { Turma } from './../../models/turma-model';
import { Curso } from './../../models/curso-model';
import { Bloco } from './../../models/bloco-model';
import { NotasServiceProvider } from './../../providers/notas-service/notas-service';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html'
})

export class NotasPage {
	
	turmaSelecionada: any;
	cursoSelecionado: any;
	msg: string = '';
	turmas: Array<Turma> = [];
	cursos: Array<Curso> = [];
	blocos: Array<Bloco> = [];
	
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public notasService: NotasServiceProvider){
		
		this.turmas = [];
		this.cursos = [];
		this.getTurmasAluno();
	}
	
	ionViewDidLoad() {
		// console.log('ionViewDidLoad AulaPage');
	}
	
	getTurmasAluno(){
		this.notasService.listTurmasAluno().then((result: Array<Turma>) =>{
			if(result.length == 0){
				this.msg = 'Você não foi matriculado em uma Turma, não há notas para serem exibidas.';
			}
			this.turmas = result;
		}, (err) =>{
			this.msg = 'Ocorreu um erro de servidor, tente novamente mais tarde';
				let prompt = this.alertCtrl.create({
				subTitle: 'Não foi possível listar as Turmas. Por favor, tente novamente',
				buttons: [{
					text: 'Ok'
				  }]
			});
		  prompt.present();
		});
	}
	
	findCursosByTurma(idTurma){
		this.turmaSelecionada = idTurma;
		// console.log("Turma: " + this.turmaSelecionada + " - Disciplina: " + this.cursoSelecionado);
		
		this.notasService.listDisciplinas(idTurma).then((result: Array<Turma>) =>{
		  this.cursos = result;
		}, (err) =>{
		  let prompt = this.alertCtrl.create({
			subTitle: 'Não foi possível listar as Disciplinas. Por favor, tente novamente',
			buttons: [{
				text: 'Ok'
			  }]
		  });
		  prompt.present();
		});
		
	}
	
	findNotasDoAluno(idCurso){
		if(idCurso == ""){
			return;
		}
		this.cursoSelecionado = idCurso;
		console.log("Turma: " + this.turmaSelecionada + " - Curso: " + this.cursoSelecionado);
		
		this.notasService.listBlocosDeNota(this.turmaSelecionada, this.cursoSelecionado).then((result: Array<Bloco>) =>{
		  this.blocos = result;
		}, (err) =>{
		  let prompt = this.alertCtrl.create({
			subTitle: 'Não foi possível listar as Notas. Por favor, tente novamente',
			buttons: [{
				text: 'Ok'
			  }]
		  });
		  prompt.present();
		});
	}
}