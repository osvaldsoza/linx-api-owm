import React from "react";

const Form = props =>
	<form onSubmit={props.handleBuscarDados}>
		<div style={{ display: 'flex', width: '50vw' }}>
			<input className="form-control" type="text" name="cidade" placeholder="Cidade" style={{ width: '250px', display: 'block' }} />
			{
				props.error && <p className="alert alert-danger" style={{ width: '270px' }}>{props.error}</p>
			}
		</div>
		<button className="btn btn-primary">Buscar</button>
	</form>

export default Form