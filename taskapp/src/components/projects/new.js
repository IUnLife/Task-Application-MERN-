import React from 'react';

const Newproject = (props) => { //console.log('new'); console.log(props);
	let pnameInput, pdescInput, tProjTypeSelect, myFormRef;
	return(
			<div className="newprojects-form">
						<h3>New Projects</h3>
						{props.successData && <h5 className="success-info">Project {props.successData.pid} - {props.successData.pname} saved successfully! </h5>}
							<div className="row">
									<div className="col-2">&nbsp;</div>
									<div className="col-8 p-4">
										<form id="add-new-project" action="#" ref={(el) => {myFormRef = el}}>
											<div className="form-group row">
												<label for="pname" className="col-lg-3">Project Name:</label>
												<input id="pname" type="text" className="col-lg-9" name="pname" ref={node => {pnameInput = node}} placeholder="Project Name" />
											</div>
											<div className="form-group row">
												<label for="pdesc" className="col-lg-3">Project Description:</label>
												<input id="pdesc" type="text" className="col-lg-9" name="pdesc" ref={node => {pdescInput = node}} placeholder="Project Description" />
											</div>
											<div className="form-group row">
												<label for="ptype" className="col-lg-3">Project Type:</label>
												{/* <input type="text" className="col-lg-9" name="ptype" ref={node => {ptypeInput = node}} placeholder="Project Type" /> */}
												<select id="ptype" className="col-lg-9" ref={node => {tProjTypeSelect = node}}>
													<option value="1">Type 1 - Support Project</option>
													<option value="2">Type 2 - Development Project</option>
													<option value="3">Type 3 - Devops Project</option>
												</select>
											</div>

											<div className="form-group row">
													<label for="btn-saveproject" className="col-lg-3">&nbsp;</label>
														<button id="btn-saveproject" type="button" className="btn btn-primary btn-lg w" onClick=
														{()=>
														props.saveNewProject({
															pid:  props.projects.length+1,
															name: pnameInput.value,
															desc: pdescInput.value,
															type: tProjTypeSelect.value
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
export default Newproject;

