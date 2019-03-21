import React from "react";
import moment from 'moment';

const Capa = props => (
	<div className="linx__info">
		
		{
			props.dadosDataSelecionada.dateTime && 	props.dadosDataSelecionada.cidade &&
			<p className="linx__key"> Data e Hora:
 				<span className="linx__value"> {moment(props.dadosDataSelecionada.dateTime).format("DD/MM/YYYY - HH:mm")}</span>
			</p>
		}
		{
			props.dadosDataSelecionada.humidade && props.dadosDataSelecionada.cidade &&
			<p className="linx__key"> Humidade:
	 			<span className="linx__value"> {props.dadosDataSelecionada.humidade}</span>
			</p>
		}
		{
			props.dadosDataSelecionada.speedWind && props.dadosDataSelecionada.cidade &&
			<p className="linx__key"> Velocidade do Vento:
	 			<span className="linx__value"> {props.dadosDataSelecionada.speedWind}</span>
			</p>
		}
		{
			props.dadosDataSelecionada.temp && props.dadosDataSelecionada.cidade &&
			<p className="linx__key"> Temperatura Atual:
	 			<span className="linx__value"> {props.dadosDataSelecionada.temp}</span>
			</p>
		}
		{
			props.dadosDataSelecionada.tempMax && props.dadosDataSelecionada.cidade &&
			<p className="linx__key"> Máxima:
	 			<span className="linx__value"> {props.dadosDataSelecionada.tempMax}</span>
			</p>
		}
		{
			props.dadosDataSelecionada.temMin && props.dadosDataSelecionada.cidade &&
			<p className="linx__key"> Mínima:
	 			<span className="linx__value"> {props.dadosDataSelecionada.temMin}</span>
			</p>
		}
	</div>
);

export default Capa;