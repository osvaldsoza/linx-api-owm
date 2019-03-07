import React from "react";

const linx = props => (
	<div className="linx__info">
	 {	
	 	props.cidade && props.pais && <p className="linx__key"> Localização: 
	 		<span className="linx__value"> { props.cidade }, { props.pais }</span>
	 	</p> 
	 }
	 { 	
	 	props.populacao && <p className="linx__key"> População: 
	 		<span className="linx__value"> { props.populacao }	</span>
	 	</p> 
	 }
	 { 	
	 	props.latitude && props.longitude && <p className="linx__key"> Coord.: 
	 		<span className="linx__value"> { `lat. ${props.latitude}`},{ `lon.: ${props.longitude}`} </span>
	 	</p> 
	 }
	 { 
	 	props.error && <p className="linx__error">{ props.error }</p>  
	 }
	</div>
);

export default linx;