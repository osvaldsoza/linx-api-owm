import React from "react";

export default props =>
	props.cidadeApi && props.pais && <h4>
		<span> {props.cidadeApi}, {props.pais}</span>
	</h4>

