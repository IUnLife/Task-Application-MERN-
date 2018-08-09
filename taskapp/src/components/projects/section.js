import React from 'react';
import PList from './list';
import PNewproject from '../../containers/Projects/New';

const ProjectList = (props) => {
	return(
		<div className="col-9">
			{props.activetab && props.activetab == 'tabProjList' &&
				<PList projects={props.projects} />
			}
			{	props.activetab && props.activetab == 'tabNewProj' &&
				<PNewproject projects={props.projects} />
			}
			</div>


	)
}
export default ProjectList;