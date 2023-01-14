import React from 'react';

const Scroll = props => {
	return (
		<div style = {{overflowY:'Scroll', border: "0px solid black", height: '700px'}}>
			{props.children}
		</div>

		)
}

export default Scroll;