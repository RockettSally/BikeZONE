import { HttpServiceProvider } from './../http-service/http-service';
import { Turma } from './../../models/turma-model';
import { Curso } from './../../models/curso-model';
import { Bloco } from './../../models/bloco-model';
import { Injectable } from '@angular/core';

@Injectable()
export class NotasServiceProvider {
	
	private turmas: Array<Turma> = [];
	private cursos: Array<Curso> = [];
	private blocos: Array<Bloco> = [];
	
	constructor(public http: HttpServiceProvider) {
		this.turmas = [];
		this.cursos = [];
		this.blocos = [];
	    console.log('Hello NotasServiceProvider Provider');
	}
	
	listTurmasAluno(){
		this.turmas = [];
		return new Promise((resolve, reject) =>{
			this.http.get('buscarTurmasDoAluno').subscribe(res =>{
				res.forEach(turma => {
	            	this.turmas.push(turma);
	          	});
				console.log(JSON.stringify(this.turmas));
		        resolve(this.turmas);
		    }, (err) =>{
		        reject(err);
		    });
		});
		
	}
	
	listDisciplinas(idTurma){
		this.cursos = [];
		return new Promise((resolve, reject) =>{
			this.http.get('buscarCursosDaTurma' + '/' + idTurma).subscribe(res =>{
				res.forEach(curso => {
	            	this.cursos.push(curso);
	          	});
				console.log(JSON.stringify(this.cursos));
		        resolve(this.cursos);
		    }, (err) =>{
		        reject(err);
		    });
		});
		
	}
	
	listBlocosDeNota(idTurma, idCurso){
		let dataCursoTurma: any = {}; 
		dataCursoTurma.idTurma = idTurma;
		dataCursoTurma.idCurso = idCurso;
		this.blocos = [];
		
		console.log("dataCursoTurma: " + JSON.stringify(dataCursoTurma));
		
		return new Promise((resolve, reject) =>{
			this.http.post('buscarBlocosDoCalendario', JSON.stringify(dataCursoTurma)).subscribe(res =>{
				res.forEach(bloco => {
	            	this.blocos.push(bloco);
	          	});
				// console.log(JSON.stringify(this.blocos));
		        resolve(this.blocos);
		    }, (err) =>{
		        reject(err);
		    });
		});
		
	}
}