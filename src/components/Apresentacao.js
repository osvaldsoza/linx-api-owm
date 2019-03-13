import React from "react";

const Apresentacao = props => (
	<div className="linx__info">
		{
			props.cidade && props.pais && <p className="linx__key"> Localização:
	 		<span className="linx__value"> {props.cidade}, {props.pais}</span>
			</p>
		}
		{
			props.error && <p className="linx__error">{props.error}</p>
		}

	</div>
);

export default Apresentacao;