import React from 'react';
import Styles from '../css/common-css';

const Aside = (props) => {
	return(
		<div className="app-aside col-3 m-6" style={Styles.aside}>
			<div className="row m-4 aside-new"><button className= {`col-lg-12 tab-new-task btn btn-primary btn-lg  ${props.tasksActiveTab}`}  onClick={() => props.loadTasksTab('tabNewTask')}>NEW TASK</button></div>
			<div className="row m-4 aside-list"><button className= {`col-lg-12 tab-task-list btn btn-primary btn-lg  ${props.tasksActiveTab}`}  onClick={() => props.loadTasksTab('tabTaskList')}>LIST TASKS</button></div>
		</div>
	)
}
export default Aside;