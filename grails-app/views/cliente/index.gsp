<html>
	<head>
		<meta name="layout" content="main"/>
		<title>${clientesLabel} - BikeZONE</title>
	</head>
	<body>
		<g:hiddenField name="idEdit" value="${idEdit}"/>
		<div class="row">
			<div class="col s12">
				<h1>${clientesLabel}</h1>
			</div>
		</div>
		<div class="divider"></div>
		<br/>
		<div class="row">
			<div class="col s12 right-align">
				<a href="javascript:void(0)" id="cadastrarCliente" class="blue waves-effect waves-light btn"><i class="material-icons left">add_circle_outline</i>Cadastrar ${clienteLabel}</a>
			</div>
		</div>
		<!-- Form Aqui -->
		<div id="divFormCliente" class="display-none">
			
		</div>
		<div class="row">
			<!-- Tabela Aqui -->
			<div id="tabelaClientes" class="col s12 display-none">
			
			</div>
		</div>
		<g:javascript src="clientes.js"/>	
	</body>
</html>