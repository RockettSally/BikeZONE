package br.com.rockettsally.bikezone.erp
import grails.converters.JSON;

import org.apache.commons.validator.Msg;
import org.springframework.http.HttpStatus;

import bikezone.Bike;
import bikezone.Cliente;
import bikezone.OrdemServico;

public class ClienteController {
	
	String actionLabel;
	String clientName;
	
    def index(Long id) {
		
		println id;
		
		[clientesLabel: "Clientes", clienteLabel: "Cliente", idEdit: id];
	}
	
	def buscarClientes(){
		sleep(1000);
		try {
			List clienteList = Cliente.findAll();
			render(template:"../cliente/tabela",model:[clienteList:clienteList]);
		} catch (Exception e) {
			log.error("Ocorreu um erro no método 'buscarClientes' do controller 'Cliente' " , e.printStackTrace());
			render(status:HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	def cadastrar(){
		actionLabel = "Cadastrar";
		clientName = "Cliente";
		render(template:"../cliente/form",model:[clienteInstance:new Cliente(), actionLabel:actionLabel, clientName:clientName]);
	}
	
	def editar(Long id){
		
		Cliente clienteInstance = Cliente.findById(id);
		
		actionLabel = "Editar Cadastro -";
		clientName = clienteInstance?.nome;
		render(template:"../cliente/form",model:[clienteInstance: clienteInstance, actionLabel:actionLabel, clientName:clientName]);
	}
	
	def salvar(Long id){

		def result = [];
		
		String msg;
		try {
			Cliente clienteInstance = Cliente.findById(id);
			if(clienteInstance){
				clienteInstance.properties = params;
				msg = "Cadastro Editado com Sucesso!";
			} else {
				clienteInstance = new Cliente(params);
				msg = "Cadastro Criado com Sucesso!";
			}
			clienteInstance.save(flush:true,failOnError:true);
			
			result = [status:Boolean.TRUE, msg: msg];
			
			render result as JSON;
		} catch (Exception e) {
			log.error("Ocorreu um erro no método 'salvar' do controller 'Cliente' " , e.printStackTrace());
			render(status:HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	def deletar(Long id){
		
		def result = []; 
		
		try {
			Cliente clienteInstance = Cliente.findById(id);
			if(!clienteInstance){
				render(status:HttpStatus.BAD_REQUEST);
				log.error("Não há cliente selecionado para deletar, tente novamente!");
				return
			}
			List ordemServicoList = OrdemServico.findAllByCliente(clienteInstance);
			if(ordemServicoList?.size() == 0){
				clienteInstance?.delete(flush:true,failOnError:true);
				result = [status:Boolean.TRUE, msg: 'Cadastro Removido com Sucesso'];
			} else {
				result = [status:Boolean.FALSE, msg: 'Este cadastro tem Ordens de Serviço associadas'];
			}
			
			render result as JSON;
			
		} catch (Exception e) {
			log.error("Ocorreu um erro no método 'deletar' do controller 'Cliente' " , e.printStackTrace());
			render(status:HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
}
