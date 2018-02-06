package security

class Usuario {
	
	String login
	String senha
	String perfil

    static constraints = {
		login(blank:false,unique:true,nullable:false)
		senha(blank:false,password:true,nullable:true)
		perfil(inList:["Administrador","Usuario"])
    }
	
	String toString(){
		login
	}
	
}
