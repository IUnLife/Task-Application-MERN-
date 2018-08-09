import React from 'react';
import Row from './prow';

const PList = (props) => {
	return (
		<div className="projects-listing">
						<h3 className="m-4">Projects List</h3>
						{ props.projects.length > 0 &&
						<div className="app-projectlist table">
							<div className="row">
									<div className="col-2">&nbsp;</div>
									<div className="col-8 p-4">
											<div className="row p-2 tbhead font-weight-bold">
												<div className="col-md-4">NAME</div>
												<div className="col-md-4">DESC</div>
												<div className="col-md-4">TYPE</div>
											</div>
											<div className="tbbody">
													{props.projects.map((project,index) => <Row key={index} prow={project}  /> )}
											</div>
									</div>
									<div className="col-2">&nbsp;</div>
							</div>
						</div>
						}
						{props.projects.length == 0 && <div className="form-group row m-4">No projects found! </div>}
				</div>
	)
}


export default PList;