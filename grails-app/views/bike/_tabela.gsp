<g:set var="index" value="${0}"></g:set>
<table id="tableBikesList" class="datatable bordered highlight">
	<thead>
		<tr>
			<th style="width:100px;">
				Nº
			</th>
			<th>
				Marca
			</th>
			<th>
				Modelo
			</th>
			<th>
				Tipo de Bike
			</th>
			<th>
				Ações
			</th>
		</tr>
	</thead>
	<tbody>
	<g:each in="${bikeList}" var="bikeInstance">
		<tr>
			<td style="width:100px;">
				${++index}
			</td>
			<td>
				${bikeInstance?.marca}
			</td>
			<td>
				${bikeInstance?.modelo}
			</td>
			<td>
				${bikeInstance?.tipoBike}
			</td>
			<td>
				<a href="javascript:void(0)" id="editarCliente" class="blue-text" title="Editar Cadastro - ${bikeInstance?.marca} ${bikeInstance?.modelo}" data-cliente="${bikeInstance?.id}"><i class="material-icons small">edit</i></a>
				<a href="javascript:void(0)" id="deletarCliente" class="red-text" title="Remover Cadastro - ${bikeInstance?.marca} ${bikeInstance?.modelo}" data-cliente="${bikeInstance?.id}"><i class="material-icons small">delete</i></a>
			</td>
		</tr>
	</g:each>
	</tbody>
</table>