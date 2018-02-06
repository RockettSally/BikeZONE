<g:set var="index" value="${0}"></g:set>
<table id="tableClientesList" class="datatable bordered highlight">
	<thead>
		<tr>
			<th style="width:100px;">
				Nº
			</th>
			<th>
				Nome
			</th>
			<th>
				Contato
			</th>
			<th>
				Telefone
			</th>
			<th>
				Ações
			</th>
		</tr>
	</thead>
	<tbody>
	<g:each in="${clienteList}" var="clienteInstance">
		<tr>
			<td style="width:100px;">
				${++index}
			</td>
			<td>
				${clienteInstance?.nome}
			</td>
			<td>
				${clienteInstance?.contato}
			</td>
			<td>
				${clienteInstance?.celular}
			</td>
			<td>
				<a href="javascript:void(0)" id="editarCliente" class="blue-text" title="Editar Cadastro - ${clienteInstance?.nome}" data-cliente="${clienteInstance?.id}"><i class="material-icons small">edit</i></a>
				<a href="javascript:void(0)" id="deletarCliente" class="red-text" title="Remover Cadastro - ${clienteInstance?.nome}" data-cliente="${clienteInstance?.id}"><i class="material-icons small">delete</i></a>
			</td>
		</tr>
	</g:each>
	</tbody>
</table>