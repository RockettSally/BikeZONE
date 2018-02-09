export class Conversa{
	nome : string;
	dataContato : string;
	descricao: string;
	tipo: string;
	
	status: string;
	msg: string;

	constructor(nome:string, dataContato:string, descricao:string, tipo:string, status: string, msg: string){
		this.nome = nome;
		this.descricao = descricao;
		this.dataContato = dataContato; 
		this.tipo = tipo;
		
		this.status = status;
		this.msg = msg;
	}

	getNome(): string{
		return this.nome;
	}

	setNome(nome: string): void{
		this.nome = nome;
	}

	getDataContato(): string{
		return this.dataContato;
	}

	setDataContato(dataContato: string): void{
		this.dataContato = dataContato;
	}

	getDescricao(): string{
		return this.descricao;
	}

	setDescricao(descricao: string){
		this.descricao = descricao;
	}

	getTipo(): string{
		return this.tipo;
	}

	setTipo(tipo: string){
		this.tipo = tipo;
	}

}
