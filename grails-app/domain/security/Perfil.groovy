package security

class Perfil {
	
	String nome
	boolean admin = false

    static constraints = {
		
		nome(nullable:false,blank:false)
		admin(nullable:true)
		
    }
}
