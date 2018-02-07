jQuery(document).ready(function(){
	
	console.log("Hello clientes.js");
	
	buscarClientes();
	
	jQuery(document).on('click','#cadastrarCliente',function(){
		cadastrarCliente();
	});
	
	jQuery(document).on('click','#editarCliente',function(){
		idCliente = jQuery(this).attr('data-cliente');
		editarCliente(idCliente);
	});
	
	jQuery(document).on('click','#cancelarCadastroCliente',function(){
		cancelarCadastro();
	});
	
	jQuery(document).on('click','#deletarCliente',function(){
		idCliente = jQuery(this).attr('data-cliente');
		
		swal({
			title: "Deletar Cadastro",
			text: 'Você tem certeza que deseja remover este cadastro?',
			type: "warning",
			showCancelButton: true,
			confirmButtonText: "Deletar",
			cancelButtonText: "Cancelar",
			focusConfirm: false,
		}).then(function (){
			deletarCliente(idCliente);
		}, function (dismiss) {
			if (dismiss === 'cancel') {
				return
			}
		});
	});
	
	jQuery(document).on('submit','.formCliente',function(event){
		salvarCliente(jQuery(this));
		event.preventDefault();
		event.stopPropagation();
		return false;
	});
});

function buscarClientes(){
	showLoading('Carregando Clientes...');
	jQuery.ajax({
		url: "buscarClientes",
		method: "GET",
		dataType: "html",
		success: function(data){
			jQuery('#tabelaClientes').html(data);
			jQuery('#tabelaClientes').show(500);
			jQuery("#tableClientesList").DataTable({
			    responsive: true
			});
		},
		error: function(request, status, error, data) {
			dialogError('Oops','Ocorreu um erro interno de Servidor');
		},
		complete: function(){
			hideLoading();
			return
		}
	});
}

function cadastrarCliente(){
	jQuery.ajax({
		url: "cadastrar",
		method: "GET",
		dataType: "html",
		success: function(data){
			jQuery('#divFormCliente').html(data);
			jQuery('#divFormCliente').show(500);
			jQuery('#tabelaClientes').hide(500);
		},
		error: function(request, status, error, data) {
			dialogError('Oops','Ocorreu um erro interno de Servidor');
		},
		complete: function(){
			Materialize.updateTextFields();
			updateMasks();
			return;
		}
	});
}

function salvarCliente($theForm){
	showLoading('Salvando Cliente...');
	jQuery.ajax({
		url: "salvar",
		method: "POST",
		dataType: "JSON",
		data: $theForm.serialize(),
		success: function(data){
			jQuery('#divFormCliente').hide(500);
			successToast(data.msg);
			buscarClientes();
		},
		error: function(request, status, error, data) {
			dialogError('Oops','Ocorreu um erro interno de Servidor');
			hideLoading();
		},
		complete: function(){
			return;
		}
	});
}

function editarCliente(idCliente){
	showLoading('Carregando Cliente...');
	jQuery.ajax({
		url: "editar",
		method: "GET",
		dataType: "html",
		data: {
			id:idCliente
		},
		success: function(data){
			jQuery('#divFormCliente').html(data);
			jQuery('#divFormCliente').show(500);
			jQuery('#tabelaClientes').hide(500);
		},
		error: function(request, status, error, data) {
			dialogError('Oops','Ocorreu um erro interno de Servidor');
		},
		complete: function(){
			Materialize.updateTextFields();
			updateMasks();
			hideLoading();
			return;
		}
	});
}

function deletarCliente(idCliente){
	showLoading('Removendo Cadastro...');
	jQuery.ajax({
		url: "deletar",
		method: "POST",
		dataType: "JSON",
		data: {
			id:idCliente
		},
		success: function(data){
			if(data.status){
				successToast(data.msg);
				buscarClientes();	
			} else {
				dialogError('Oops', data.msg);
			}
		},
		error: function(request, status, error, data) {
			dialogError('Oops','Ocorreu um erro interno de Servidor');
		},
		complete: function(){
			hideLoading();
			return;
		}
	});
}

function cancelarCadastro(){
	jQuery('#divFormCliente').hide(500);
	buscarClientes();
}