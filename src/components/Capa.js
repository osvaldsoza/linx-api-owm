import React from "react";

const Capa = props => (
	<div className="linx__info">
		{/* <h1 className="title-container__title">{this.props.dadosDataSelecionada[0].humidade}</h1>
		<h3 className="title-container__subtitle">Call 5 day / 3 hour forecast data</h3>
<h4 className="title-container__subtitle">Osvaldo Souza Ferreira</h4> */}
		{
			props.humidade && <p className="linx__key"> Humidade:
	 <span className="linx__value"> {props.humidade}</span>
			</p>
		}
	</div>
);

export default Capa;