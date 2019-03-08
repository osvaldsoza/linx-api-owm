import React from "react";
import moment from 'moment';

const Apresentacao = props => (
	<div className="linx__info">
		{
			props.cidade && props.pais && <p className="linx__key"> Localização:
	 		<span className="linx__value"> {props.cidade}, {props.pais}</span>
			</p>
		}
		{
			props.data && <p className="linx__key"> Data:
	 		<span className="linx__value"> {moment(props.data).format('DD/MM/YYYY')} </span>
			</p>
		}
		{
			props.temperatura && <p className="linx__key"> Temperatura:
	 		<span className="linx__value"> {props.temperatura} </span>
			</p>
		}
		{
			props.humidade && <p className="linx__key"> Humidade:
	 		<span className="linx__value"> {props.humidade} </span>
			</p>
		}
		{
			props.clima && <p className="linx__key"> Clima:
	 		<span className="linx__value"> {props.clima.toUpperCase()} </span>
			</p>
		}
		{
			props.error && <p className="linx__error">{props.error}</p>
		}

	</div>
);

export default Apresentacao;