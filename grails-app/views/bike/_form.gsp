<g:form class="formBike">
	<fieldset>
	<div class="row title-row">
		<div class="col s12"><h5>${actionLabel} ${bikeName}</h5></div>
	</div>
	<div class="row">
		<g:hiddenField name="id" value="${bikeInstance?.id}"/>
        <div class="input-field col s12 l4">
        	<i class="material-icons prefix">directions_bike</i>
	        <g:textField name="modelo" id="modelo" type="text" class="modelo" value="${bikeInstance?.modelo}"/>
	        <label for="modelo">Modelo</label>
        </div>
        <div class="input-field col s12 l4">
	        <i class="material-icons prefix">label</i>
	        <g:textField name="marca" id="marca" type="text" required value="${bikeInstance?.marca}"/>
	        <label for="marca">Marca <b>*</b></label>
        </div>
        <div class="input-field col s12 l4">
        	<i class="material-icons prefix">settings</i>
	        <g:textField name="relacao" id="relacao" type="text" class="relacao" value="${bikeInstance?.relacao}"/>
	        <label for="relacao">Relação de Marchas</label>
        </div>
	</div>
	<div class="row">
		<div class="input-field col s12 l6">
			<i class="material-icons prefix">label_outline</i>
	        <g:select from="${tipoBikeList}" name="tipoBike" id="tipoBike" class="filtro tipoBike" optionKey="id" optionValue="tipoBike" noSelection="${['null':'Selecione...']}" value="${bikeInstance?.tipoBike?.id}"/>
			<label for="tipoBike">Tipo de Bike</label>
		</div>
		<div class="input-field col s12 l6">
	       	<i class="material-icons prefix">account_circle</i>
	        <g:select from="${clienteList}" name="cliente" id="cliente" class="filtro cliente" optionKey="id" optionValue="nome" noSelection="${['null':'Selecione...']}" value="${bikeInstance?.cliente?.id}"/>
			<label for="cliente">Cliente</label>
		</div>
	</div>
	<div class="row">
		<div class="input-field col s12">
			<i class="material-icons prefix">mode_edit</i>
			<g:textArea name="detalhes" id="detalhes" class="detalhes materialize-textarea" value="${bikeInstance?.detalhes}" escapeHtml="true"></g:textArea>
			<label for="cliente">Detalhes</label>
		</div>
	</div>
	<div class="row">
		<div class="col s12">
			<g:actionSubmit id="salvarCadastro" class="green waves-effect waves-light btn" value="Salvar"/>
			<a href="javascrip:void(0)" id="cancelarCadastro" class="grey lighten-1 waves-effect waves-light btn">Cancelar</a>
		</div>
	</div>
	</fieldset>
</g:form>