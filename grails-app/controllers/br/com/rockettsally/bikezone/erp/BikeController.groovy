package br.com.rockettsally.bikezone.erp

import org.springframework.http.HttpStatus;

import bikezone.Bike;

class BikeController {

    def index() {
		[bikeLabel:"Bike", bikesLabel:"Bikes"];
	}
	
	def buscarBikes(){
		sleep(1000);
		try {
			List bikeList = Bike.findAll();
			render(template:"../bike/tabela",model:[clienteList:bikeList]);
		} catch (Exception e) {
			log.error("Ocorreu um erro no método 'buscarClientes' do controller 'Cliente' ", e.printStackTrace());
			render(status:HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
