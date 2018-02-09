import { ItemBloco } from './item-bloco-model';

export class Bloco{
	
	id: string;
	nome: string;
	itens: Array<ItemBloco>;
	
	constructor(id: string, nome:string, itens: Array<ItemBloco>){
		this.id = id;
		this.nome = nome;
		this.itens = itens;
	}
}