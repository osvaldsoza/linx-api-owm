import React from "react";

export default props =>
	props.cidade && props.pais && <h4>
		<span> {props.cidade}, {props.pais}</span>
	</h4>

