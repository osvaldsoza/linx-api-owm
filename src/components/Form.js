import React from "react";

const Form = props => (
	<form onSubmit={props.handleBuscarDados}>
		<input type="text" name="cidade" placeholder="Cidade..."/>
		<button>Buscar</button>
	</form>
);

export default Form;