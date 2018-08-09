import React from 'react';

const Task = (props) => {
	let select;
		return(
			<div className="border border-info mb-4">
						<div className="p-2">
							<label className="p-2"><b>Task: </b>{props.taskDetails.tid}</label>
							<div className="text-right text-danger">
								<b>
									{props.taskDetails.status == 0 && 'Added '}
									{props.taskDetails.status == 1 && 'Started '}
									{props.taskDetails.status == 2 && 'Completed '}
								</b>
								{
									props.taskDetails.age
								}
								 &nbsp;minutes ago
							</div>
						</div>
						<div className="p-2 border">
							<label className="col-6"> {props.taskDetails.name}</label>
							<select className="col-6" ref={node => {select = node}} value={props.taskDetails.status} onChange={(e) => (props.updateTaskStatus(props.taskDetails,select.value))}>
								<option value="0">Not started</option>
								<option value="1">In Progress</option>
								<option value="2">Completed</option>
							</select>
						</div>
						<div className="p-4 border">{props.taskDetails.desc}</div>
			</div>
		)

}


export default Task;