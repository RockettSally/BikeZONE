jQuery(document).ready(function(){
	jQuery(".button-collapse").sideNav();
});

function showLoading(msg){
	jQuery('#msgLoading').text(msg);
	jQuery('#loading').show(500);
}

function hideLoading(){
	jQuery('#loading').hide(500);
	jQuery('#msgLoading').val('');
}

function dialogError(title,msg){
	swal(title,msg,'error');
}

function updateMasks(){
	$('.date').mask('11/11/1111');
	$('.time').mask('00:00:00');
	$('.date_time').mask('99/99/9999 00:00:00');
	$('.cep').mask('99999-999');
	$('.phone').mask('99999-9999');
	$('.phone_with_ddd').mask('(99) 9999-9999');
	$('.phone_us').mask('(999) 999-9999');
	$('.mixed').mask('AAA 000-S0S');
}

function successToast(msg){
	Materialize.toast(msg, 3000, 'rounded green');
}

function updateFilters(){
	jQuery('select').material_select();
}
