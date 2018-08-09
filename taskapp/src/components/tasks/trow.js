import React from 'react'

const Row = props => {
	return(
		<div className="row p-2">
			<div className="col-md-4">{props.trow.name}</div>
			<div className="col-md-4">{props.trow.desc}</div>
			<div className="col-md-4">{props.trow.status}</div>
		</div>
	)
}

export default Row;