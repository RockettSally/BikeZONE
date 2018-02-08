<html>
	<head>
		<meta name="layout" content="main"/>
		<title>${bikesLabel} - BikeZONE</title>
	</head>
	<body>
		<div class="row">
			<div class="col s12">
				<h1>${bikesLabel}</h1>
			</div>
		</div>
		<div class="divider"></div>
		<br/>
		<div class="row">
			<div class="col s12 right-align">
				<a href="javascript:void(0)" id="cadastrarBike" class="blue waves-effect waves-light btn"><i class="material-icons left">add_circle_outline</i> Cadastrar ${bikeLabel}</a>
			</div>
		</div>
		<%--<!-- Form Aqui -->--%>
		<div id="divFormBike" class="display-none">
			
		</div>
		<div class="row">
			<!-- Tabela Aqui -->
			<div id="tabelaBikes" class="col s12 display-none">
			
			</div>
		</div>
		<g:javascript src="bikes.js"/>
		</body>
</html>