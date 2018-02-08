<g:set var="index" value="${0}"></g:set>
<table id="tableBikesList" class="datatable bordered highlight">
	<thead>
		<tr>
			<th style="width:30px;">
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
				Relação de Marchas
			</th>
			<th>
				Cliente
			</th>
			<th>
				Detalhes
			</th>
			<th style="width:30px;">
				Ações
			</th>
		</tr>
	</thead>
	<tbody>
	<g:each in="${bikeList}" var="bikeInstance">
		<tr>
			<td style="width:30px;">
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
				${bikeInstance?.relacao}
			</td>
			<td >
				${bikeInstance?.cliente}
			</td>
			<td >
				${bikeInstance?.detalhes}
			</td>
			<td style="width:30px;">
				<a href="javascript:void(0)" id="editarCliente" class="blue-text" title="Editar Cadastro - ${bikeInstance?.marca} ${bikeInstance?.modelo}" data-cliente="${bikeInstance?.id}"><i class="material-icons small">edit</i></a>
				<a href="javascript:void(0)" id="deletarCliente" class="red-text" title="Remover Cadastro - ${bikeInstance?.marca} ${bikeInstance?.modelo}" data-cliente="${bikeInstance?.id}"><i class="material-icons small">delete</i></a>
			</td>
		</tr>
	</g:each>
	</tbody>
</table>