import React from 'react';
import AllTasksList from './list';
import NewTask from '../../containers/Tasks/New';

const ProjectList = (props) => {
	return(
		<div className="col-9">
			{props.activetab && props.activetab == 'tabTaskList' &&
				<AllTasksList tasks={props.tasks} />
			}
			{	props.activetab && props.activetab == 'tabNewTask' &&
				<NewTask />
			}
			</div>


	)
}
export default ProjectList;