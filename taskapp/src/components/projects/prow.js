import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const Row = (props) => {// console.log(props);
	let type;
	if(props.prow.type == '1') { type = "Project 1 - Support Project"}
	else if(props.prow.type == '2') { type = "Type 2 - Development Project"}
	else if(props.prow.type == '3') { type = "Type 3 - Devops Project"}

	return(
		<div className="row p-2">
			<div className="col-md-4"><a href="javascript://" onClick={()=>props.fetchProjectTasks(props.prow.pid)}>{props.prow.name}</a></div>
			<div className="col-md-4">{props.prow.desc}</div>
			<div className="col-md-4">{type}</div>
		</div>
	)
}

//export default Row;


const mapDispatchToProps = dispatch => {
	return{
		fetchProjectTasks: (pid) => {
			dispatch(actions.showProjectDetail(pid))
		}
	}
}

export default connect(null, mapDispatchToProps)(Row);

