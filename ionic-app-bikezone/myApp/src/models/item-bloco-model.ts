export class ItemBloco{
	
	id: string;
	nome: string;
	sigla: string;
	nota: string;
	
	constructor(id: string, nome:string, sigla: string, nota:string){
		this.id = id;
		this.nome = nome;
		this.sigla = sigla;
		this.nota = nota;
	}
}