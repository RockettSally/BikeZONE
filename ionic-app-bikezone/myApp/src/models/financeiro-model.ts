export class Financeiro{

	valor	: number;
	desconto: number;
	formaPagamento : string;
	vencimento	: string;
	dataPagamento : string;
	urlBoleto: string;

	constructor(valor:number, desconto: number, formaPagamento: string, vencimento:string,  dataPagamento: string, urlBoleto: string){
		this.valor	= valor;
		this.desconto = desconto;
		this.vencimento = vencimento;
		this.formaPagamento = formaPagamento;
		this.dataPagamento = dataPagamento;
		this.urlBoleto = urlBoleto;
	}

	getVencimento(): string{
		return this.vencimento;
	}

	setVencimento(vencimento: string): void{
		this.vencimento = vencimento;
	}

	getValor(): number{
		return this.valor;
	}

	setValor(valor: number): void{
		this.valor = valor;
	}

	getDesconto(): number{
		return this.desconto;
	}

	setDesconto(desconto: number): void{
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

}
