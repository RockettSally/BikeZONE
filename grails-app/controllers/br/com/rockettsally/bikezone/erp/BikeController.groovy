package br.com.rockettsally.bikezone.erp

import org.springframework.http.HttpStatus;

import bikezone.Bike;
import bikezone.Cliente;
import bikezone.TipoBike;

class BikeController {
	
	String actionLabel;
	String bikeName;

    def index() {
		[bikeLabel:"Bike", bikesLabel:"Bikes"];
	}
	
	def buscarBikes(){
		sleep(1000);
		try {
			List bikeList = Bike.findAll();
			render(template:"../bike/tabela",model:[bikeList:bikeList]);
		} catch (Exception e) {
			log.error("Ocorreu um erro no método 'buscarClientes' do controller 'Cliente' ", e.printStackTrace());
			render(status:HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	def cadastrar(){
		List tipoBikeList = TipoBike.findAll();
		List clienteList = Cliente.findAll();
		actionLabel = "Cadastrar";
		bikeName = "Bike";
		render(template:"../bike/form",model:[bikeInstance:new Bike(), clienteList:clienteList ,tipoBikeList:tipoBikeList, actionLabel:actionLabel, bikeName:bikeName]);
	}
	
}
