package bikezone

class FooterTagLib {
	
	def esteAno = {
		out << new Date().format("yyyy")
	}

}
