import React from "react";

export default props =>
	<div>
		<div style={{ display: 'flex', width: '50vw' }}>
			<input
				className="form-control"
				type="text" 
				name="cidade"
				value={props.cidade}
				placeholder= {props.error ? props.error : 'Nome da cidade'}
				style={{ width: '300px', display: 'block' }}
				onChange={props.handleFieldChange}
			/>
		</div>
		<button className="btn btn-primary" onClick={props.handleBuscarDados}>Buscar</button>
	</div>
