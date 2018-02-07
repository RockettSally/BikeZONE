package bikezone

class Bike {
	
	String marca
	String modelo
	String detalhes
	TipoBike tipoBike
	String relacao
	Cliente cliente
	
	static belongsTo = [cliente:Cliente, tipoBike:TipoBike]
	
    static constraints = {
		marca(nullable:true)
		modelo(blank:false)
		detalhes(nullable:true)
		tipoBike(nullable:true)
		relacao(nullable:true)
		cliente(nullable:true)
    }

	String toString(){	
		
		return "${marca} ${modelo} (${cliente})"
		
	}
	
}
