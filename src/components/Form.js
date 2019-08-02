import React from "react";

const Form = props => 
	<form onSubmit={props.handleBuscarDados}>
		<input type="text" name="cidade" placeholder="Informe uma cidade" style={{width:'250px'}}/>
		<button>Buscar</button>
	</form>

export default Form