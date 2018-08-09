import React from 'react';
import Row from './trow';
import CTask from '../../containers/Tasks/Task';

const TList = (props) => {
	const tasks = props.tasks;
	let notStartedTasks, inProgressTasks, completedTasks;
	if (props.tasks.length >0){
			notStartedTasks = tasks ? tasks.filter(task => task.status == 0) : [];
			inProgressTasks = tasks ? tasks.filter(task => task.status == 1) : [];
			completedTasks = tasks ? tasks.filter(task => task.status == 2) : [];
		}
	return (
		<div className="projects-listing">
						<h3 className="m-4">Tasks List</h3>
						{props.tasks.length > 0 &&

						<div className="app-tasklist">
									<div className="p-4">
											<div className="tbbody">
													{/* {props.tasks.map((task,index) => <Row key={index} trow={task} /> )} */}

													<div className="row">
														<div className="col bg-light">
															<label className="font-weight-bold text-info">Not Started</label>
															{notStartedTasks.map((task,index) => <CTask key={index} taskDetails={task} /> )}
														</div>
														<div className="col bg-light">
															<label className="font-weight-bold text-warning">In Progress</label>
															{inProgressTasks.map((task,index) => <CTask key={index}  taskDetails={task} /> ) }
														</div>
														<div className="col bg-light">
															<label className="font-weight-bold text-success">Completed</label>
															{completedTasks.map((task,index) => <CTask key={index} taskDetails={task} /> ) }
														</div>
													</div>
											</div>
									</div>
						</div>
						}
						{props.tasks.length ==0 && <div className="form-group row m-4">No tasks found! </div>}
				</div>
	)
}
export default TList;








