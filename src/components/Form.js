import React from "react";

const Form = props => (
	<form onSubmit={props.getDados}>
		<input type="text" name="cidade" placeholder="Cidade..."/>
		<button>Buscar</button>
	</form>
);

export default Form;