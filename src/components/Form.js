import React from "react";

export default props =>
	<div>
		<div style={{ display: 'flex', width: '50vw' }}>
			<input
				className="form-control"
				type="text" 
				name="cidade"
				value={props.cidade}
				placeholder="Cidade"
				style={{ width: '250px', display: 'block' }}
				onChange={props.handleFieldChange}
			/>
			{
				props.error && <p className="alert alert-danger" style={{ width: '270px' }}>{props.error}</p>
			}
		</div>
		<button className="btn btn-primary" onClick={props.handleBuscarDados}>Buscar</button>
	</div>
