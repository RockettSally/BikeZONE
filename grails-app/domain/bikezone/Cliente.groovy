package bikezone

class Cliente {
	
	String nome
	String telefone
	String celular
	String contato
	
	static hasMany = [bikes:Bike]
	
    static constraints = {
		nome(blank:false, nullable:true)
		telefone(nullable:true)
		celular(nullable:true)
		contato(nullable:true)
    }
	
	String toString(){
		return "${nome}"
	}
}
