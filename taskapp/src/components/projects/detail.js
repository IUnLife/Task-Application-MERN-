import React from 'react';
import TRow from './trow';

const ProjectDetail = (props) => {
	return (
			<div className="projects-detail row col-9">
				{ props.ptasks.length > 0 &&
				<div className="app-project-details table">
							<h3 className="m-4">Project Task List</h3>
								<div>
									<div className="row">
											<div className="col-2">&nbsp;</div>
											<div className="col-8 table table-bordered border-primary p-4">
													<div className="row p-2 tbhead font-weight-bold">
														<div className="col-md-4">TASK NAME</div>
														<div className="col-md-4">TASK DESCRIPTION</div>
														<div className="col-md-4">TASK STATUS</div>
													</div>
													<div className="tbbody">
															{ props.ptasks && props.ptasks.map((task,index) => <TRow key={index} task={task} />) }
													</div>
											</div>
											<div className="col-2">&nbsp;</div>
									</div>
								</div>
					</div>
				}
				{props.ptasks.length == 0 &&
					<div className="row m-4">No Tasks for this project</div>
				}
				</div>
	)
}
export default ProjectDetail;