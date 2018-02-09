export class Parcela{

	valor	: string;
	desconto: string;
	formaPagamento : string;
	vencimento	: string;
	dataPagamento : string;
	categoria: string;
	estaPendente: boolean;
	descricao: string;
	valorPago: string;
	valorLiquido: string;

	constructor(valor:string, desconto: string, formaPagamento: string, vencimento:string,  dataPagamento: string, categoria:string, estaPendente: boolean, descricao:string, valorPago: string){
		this.valor	= valor;
		this.desconto = desconto;
		this.vencimento = vencimento;
		this.formaPagamento = formaPagamento;
		this.dataPagamento = dataPagamento;
		this.categoria = categoria;
		this.estaPendente = estaPendente;
		this.descricao = descricao;
		this.valorPago = valorPago;
	}

	getVencimento(): string{
		return this.vencimento;
	}

	setVencimento(vencimento: string): void{
		this.vencimento = vencimento;
	}

	getValor(): string{
		return this.valor;
	}

	setValor(valor: string): void{
		this.valor = valor;
	}

	getDesconto(): string{
		return this.desconto;
	}

	setDesconto(desconto: string): void{
		this.desconto = desconto;
	}

	setFormaPagamento(formaPagamento: string): void{
		this.formaPagamento = formaPagamento;
	}

	getFormaPagamento(): string{
		return this.formaPagamento;
	}

	setDataPagamento(dataPagamento: string): void{
		this.dataPagamento = dataPagamento;
	}

	getDataPagamento(): string{
		return this.dataPagamento;
	}

	setEstaPendente(estaPendente: boolean): void{
		this.estaPendente = estaPendente;
	}

	getEstaPendente(): boolean{
		return this.estaPendente;
	}

	setDescricao(descricao: string): void{
		this.descricao = descricao;
	}

	getDescricao(): string{
		return this.descricao;
	}


}
