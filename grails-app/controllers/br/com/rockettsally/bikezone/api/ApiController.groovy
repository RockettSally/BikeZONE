package br.com.rockettsally.bikezone.api

import bikezone.Cliente

import grails.converters.JSON

import org.springframework.http.HttpStatus
import org.codehaus.groovy.grails.web.json.JSONArray;
import org.codehaus.groovy.grails.web.json.JSONObject;

class ApiController {

    def index() {
    
        render 'API Controller para o APP em Ionic';
        
    }
    
    def buscarClientes(){

            long tempoInicial = System.currentTimeMillis();

            try{
                    JSONArray listaClientesJSON = new JSONArray();
			
                    List listClientes = Cliente.findAll();

                    for(Cliente clienteInstance in listClientes.reverse()){
                            JSONObject jsonObject = montarJSONcliente(clienteInstance);
                            listaClientesJSON.add(jsonObject);
                    }

                    render listaClientesJSON as JSON;

            } catch(Exception e){

                    log.error("Erro ao buscar a lista de Clientes.", e.printStackTrace());
                    render(status: HttpStatus.INTERNAL_SERVER_ERROR, text: message(code: 'http.code.500'));

            } finally {
                    long tempoFinal = System.currentTimeMillis();
                    println("Tempo de execução do método 'buscarClientes' no 'APIController' .:::::>>>>> "+ ((tempoFinal - tempoInicial) / 1000)+" segundos");
                    return true;
            }

    }

    def montarJSONcliente(Cliente clienteInstance){
        
            JSONObject jsonObject = new JSONObject();
            jsonObject.put('id', clienteInstance?.id);
            jsonObject.put('nome', clienteInstance?.nome);

            return jsonObject;
    }
    
}
