import React from "react";
import moment from 'moment';

export default props => (
	<ul>
		{
			props.dataSelecionada && 	props.cidadeApi &&
			<li> Data e Hora:
 				<strong> {moment(props.dataSelecionada).format("DD/MM/YYYY - HH:mm")}</strong>
			</li>
		}
		{
			props.humidade && props.cidadeApi &&
			<li> Humidade:
	 			<strong> {props.humidade}</strong>
			</li>
		}
		{
			props.speedWind && props.cidadeApi &&
			<li> Velocidade do Vento:
	 			<strong> {props.speedWind}</strong>
			</li>
		}
		{
			props.temp && props.cidadeApi &&
			<li> Temperatura Atual:
	 			<strong> {props.temp}</strong>
			</li>
		}
		{
			props.tempMax && props.cidadeApi &&
			<li> Máxima:
	 			<strong> {props.tempMax}</strong>
			</li>
		}
		{
			props.temMin && props.cidadeApi &&
			<li> Mínima:
	 			<strong> {props.temMin}</strong>
			</li>
		}
	</ul>
)
