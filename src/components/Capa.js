import React from "react";
import moment from 'moment';

const Capa = props => (
	<div className="linx__info">
		
		{
			props.propsCapa.dateTime && 	props.propsCapa.cidade &&
			<p className="linx__key"> Data e Hora:
 				<span className="linx__value"> {moment(props.propsCapa.dateTime).format("DD/MM/YYYY - HH:mm")}</span>
			</p>
		}
		{
			props.propsCapa.humidade && props.propsCapa.cidade &&
			<p className="linx__key"> Humidade:
	 			<span className="linx__value"> {props.propsCapa.humidade}</span>
			</p>
		}
		{
			props.propsCapa.speedWind && props.propsCapa.cidade &&
			<p className="linx__key"> Velocidade do Vento:
	 			<span className="linx__value"> {props.propsCapa.speedWind}</span>
			</p>
		}
		{
			props.propsCapa.temp && props.propsCapa.cidade &&
			<p className="linx__key"> Temperatura Atual:
	 			<span className="linx__value"> {props.propsCapa.temp}</span>
			</p>
		}
		{
			props.propsCapa.tempMax && props.propsCapa.cidade &&
			<p className="linx__key"> Máxima:
	 			<span className="linx__value"> {props.propsCapa.tempMax}</span>
			</p>
		}
		{
			props.propsCapa.temMin && props.propsCapa.cidade &&
			<p className="linx__key"> Mínima:
	 			<span className="linx__value"> {props.propsCapa.temMin}</span>
			</p>
		}
	</div>
);

export default Capa;