package bikezone

class OrdemServico {
	
	Bike bike
	Cliente cliente
	Servico tipoServico
	String custo
	String detalhes
	String previsaoConclusao
	Date dateCreated
	Date lastUpdated
	
	static belongsTo = [cliente:Cliente, bike:Bike]

    static constraints = {
		bike(blank:false, nullable:true)
		cliente(nullable:true)
		tipoServico(nullable:true)
		previsaoConclusao(nullable:true)
		custo(nullable:true)
		detalhes(nullable:true)
    }
	
}
