jQuery(document).ready(function(){
	
	console.log("Hello bikes.js");
	
	buscarBikes();
	
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