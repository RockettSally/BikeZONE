package bikezone

class TipoBike {
	
	String tipoBike

    static constraints = {
		tipoBike(nullable:true)
    }
	
	String toString(){
		return "${tipoBike}"
	}
}
