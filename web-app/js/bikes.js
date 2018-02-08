jQuery(document).ready(function(){
	
	console.log("Hello bikes.js");
	
	buscarBikes();
	
	jQuery(document).on('click','#cadastrarBike',function(){
		cadastrarBike();
	});
	
	jQuery(document).on('click','#cancelarCadastro',function(){
		cancelarCadastro();
	});
	
});

function buscarBikes(){
	showLoading('Carregando Bikes...');
	jQuery.ajax({
		url: "buscarBikes",
		method: "GET",
		dataType: "html",
		success: function(data){
			jQuery('#tabelaBikes').html(data);
			jQuery('#tabelaBikes').show(500);
			jQuery("#tableBikesList").DataTable({
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

function cadastrarBike(){
	showLoading('Carregando Formulário...');
	jQuery.ajax({
		url: "cadastrar",
		method: "GET",
		dataType: "html",
		success: function(data){
			jQuery('#divFormBike').html(data);
			jQuery('#divFormBike').show(500);
			jQuery('#tabelaBikes').hide(500);
		},
		error: function(request, status, error, data) {
			dialogError('Oops','Ocorreu um erro interno de Servidor');
		},
		complete: function(){
			Materialize.updateTextFields();
			hideLoading();
			updateMasks();
			updateFilters();
			return;
		}
	});
}

function cancelarCadastro(){
	jQuery('#divFormBike').hide(500);
	buscarBikes();
}