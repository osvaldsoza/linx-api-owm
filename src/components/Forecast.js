import React from "react";
import moment from 'moment';

export default props => (
	<ul>
		{
			props.dateTime && 	props.cidade &&
			<li> Data e Hora:
 				<strong> {moment(props.dateTime).format("DD/MM/YYYY - HH:mm")}</strong>
			</li>
		}
		{
			props.humidade && props.cidade &&
			<li> Humidade:
	 			<strong> {props.humidade}</strong>
			</li>
		}
		{
			props.speedWind && props.cidade &&
			<li> Velocidade do Vento:
	 			<strong> {props.speedWind}</strong>
			</li>
		}
		{
			props.temp && props.cidade &&
			<li> Temperatura Atual:
	 			<strong> {props.temp}</strong>
			</li>
		}
		{
			props.tempMax && props.cidade &&
			<li> Máxima:
	 			<strong> {props.tempMax}</strong>
			</li>
		}
		{
			props.temMin && props.cidade &&
			<li> Mínima:
	 			<strong> {props.temMin}</strong>
			</li>
		}
	</ul>
)
