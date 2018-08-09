import React from 'react';

const NewTask = (props) => {
	let tnameInput, tdescInput, tProjSelect, tStatusSelect ,myFormRef; //console.log(props);
	let taskCounter = props.tasks.length + 1;
	return(
			<div className="newprojects-form">
						<h3 className="m-4">Add New Task</h3>
						{props.successData && <h5 className="success-info">Task {props.successData.tid} - {props.successData.tname} saved successfully! </h5>}
							<div className="row">
									<div className="col-2">&nbsp;</div>
									<div className="col-8 p-4">
										<form id="add-new-task" action="#" ref={(el) => {myFormRef = el}}>
											<div className="form-group row">
												<label for="taskname" className="col-lg-3">Task Name:</label>
												<input id="taskname" type="text" className="col-lg-9" name="tname" ref={node => {tnameInput = node}} placeholder="Task Name" />
											</div>
											<div className="form-group row">
												<label for="taskdesc" className="col-lg-3">Task Description:</label>
												<input id="taskdesc" type="text" className="col-lg-9" name="tdesc" ref={node => {tdescInput = node}} placeholder="Task Description" />
											</div>

											<div className="form-group row">
												<label for="taskstatus" className="col-lg-3">Task Status:</label>
												<select id="taskstatus" className="col-lg-9" ref={node => {tStatusSelect = node}}>
													<option value="0">Not started</option>
													<option value="1">In Progress</option>
													<option value="2">Completed</option>
												</select>
											</div>
											<div className="form-group row">
												<label for="taskproject" className="col-lg-3">Project Type:</label>
												<select id="taskproject" className="col-lg-9" ref={node => {tProjSelect = node}}>
													<option value="1">Type 1 - Support Project</option>
													<option value="2">Type 2 - Development Project</option>
													<option value="3">Type 3 - Devops Project</option>
												</select>
											</div>
											<div className="form-group row">
												<label for="btn-save" className="col-lg-3">&nbsp;</label>
												<button id="btn-save"  type="button" className="btn btn-primary btn-lg" onClick=
												{()=>
												props.saveNewTask({
													tid: 		taskCounter,
													pid: 		tProjSelect.value,
													name: 	tnameInput.value,
													desc: 	tdescInput.value,
													status: tStatusSelect.value,
													age: 0
												})

												} >
												SAVE</button>
											</div>
										</form>
									</div>
									<div className="col-2">&nbsp;</div>
						</div>
				</div>
	)
}
export default NewTask;

