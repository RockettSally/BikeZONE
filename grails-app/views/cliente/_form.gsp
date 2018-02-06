<g:form class="formCliente">
	<fieldset>
	<div class="row title-row">
		<div class="col s12"><h5>${actionLabel} ${clientName}</h5></div>
	</div>
	<div class="row">
		<g:hiddenField name="id" value="${clienteInstance?.id}"/>
        <div class="input-field col s12 l6">
	        <i class="material-icons prefix">account_circle</i>
	        <g:textField name="nome" id="nome" type="text" required value="${clienteInstance?.nome}"/>
	        <label for="nome">Nome <b>*</b></label>
        </div>
        <div class="input-field col s12 l2">
        	<i class="material-icons prefix">person</i>
	        <g:textField name="contato" id="contato" type="text" class="contato" value="${clienteInstance?.contato}"/>
	        <label for="telefone">Contato</label>
        </div>
        <div class="input-field col s12 l2">
        	<i class="material-icons prefix">phone</i>
	        <g:textField name="celular" id="celular" type="text" class="celular phone" value="${clienteInstance?.celular}"/>
	        <label for="telefone">Celular</label>
        </div>
	</div>
	<div class="row">
		<div class="col s12">
			<g:actionSubmit id="salvarCadastro" class="green waves-effect waves-light btn" value="Salvar"/>
			<a href="javascrip:void(0)" id="cancelarCadastroCliente" class="grey lighten-1 waves-effect waves-light btn">Cancelar</a>
		</div>
	</div>
	</fieldset>
</g:form>