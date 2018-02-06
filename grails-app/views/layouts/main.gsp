<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="Grails"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="${resource(dir: 'images', file: 'favicon.ico')}" type="image/x-icon">
		<link rel="apple-touch-icon" href="${resource(dir: 'images', file: 'apple-touch-icon.png')}">
		<link rel="apple-touch-icon" sizes="114x114" href="${resource(dir: 'images', file: 'apple-touch-icon-retina.png')}">

		<!-- Imports CSS -->
		<!--Import Google Icon Font-->
      	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.0/themes/base/jquery-ui.css" />
		<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.15/css/jquery.dataTables.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.10.1/sweetalert2.min.css">
		<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
		<link rel="stylesheet" href="${resource(dir: 'css', file: 'bikezone.css')}" type="text/css">
		
		<!-- Script Import -->		
		<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.15/js/jquery.dataTables.js"></script>
		<script src="http://code.jquery.com/ui/1.9.0/jquery-ui.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
		
		<!-- Include a polyfill for ES6 Promises (optional) for IE11 and Android browser -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.10.1/sweetalert2.min.js"></script>
		
		<g:javascript src="jquery.mask.min.js" />
		<g:javascript src="jquery.maskedinput.js" />
		<g:javascript src="printThis.js" />
		<g:javascript src="datatables-init.js" />
		<g:javascript src="bikezone.js"/>	

		<g:layoutHead/>
		<r:layoutResources />
	</head>
	<body>
	<nav class="grey darken-4">
		<div class="nav-wrapper padding">
			<a href="../" class="brand-logo">BikeZONE</a>
			<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
				
			<ul id="nav-mobile" class="right hide-on-med-and-down">
					<g:render template="../layouts/sidenav"></g:render>
			</ul>
			<ul class="side-nav" id="mobile-demo">
				<g:render template="../layouts/sidenav"></g:render>
			</ul>
		</div>
	</nav>
	<section class="padding">
	<div id="loading" class="row">
		<br/>
	  	<div class="progress container">
			<div class="indeterminate"></div>
		</div>
		<h5 id="msgLoading" class="center-align"></h5>
	</div>
	<g:layoutBody/>
	<r:layoutResources />
	</section>
	</body>
</html>