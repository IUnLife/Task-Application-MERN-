import React from 'react';



const TRow = (props) => {
	let status;
	if(props.task.status == '0') { status = "Unstarted"}
	else if(props.task.status == '1') { status = "In Progress"}
	else if(props.task.status == '2') { status = "Completed"}
	return(
		<div className="row p-2">
			<div className="col-md-4">{props.task.name}</div>
			<div className="col-md-4">{props.task.desc}</div>
			<div className="col-md-4">{status}</div>
		</div>
	)
}

export default TRow;




