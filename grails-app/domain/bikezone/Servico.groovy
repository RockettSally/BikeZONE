package bikezone

class Servico {
	
	String tipoServico

    static constraints = {
		tipoServico(nullable:true)
    }
	
	String toString(){
		return "${tipoServico}"
	}
}
