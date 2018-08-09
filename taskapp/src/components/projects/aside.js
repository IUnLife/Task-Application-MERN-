import React from 'react';
import Styles from '../css/common-css';


const Aside = (props) => {
	return(
		<div className="app-aside col-3 m-6" style={Styles.aside}>
			<div className="row m-4 aside-new"><button className={`col-lg-12 btn btn-primary btn-lg ${props.projectsActiveTab}`}  onClick={() => props.loadProjectsTab('tabNewProj')}>NEW PROJECT</button></div>
			<div className="row m-4 aside-list"><button className={`col-lg-12 btn btn-primary btn-lg ${props.projectsActiveTab}`}  onClick={() => props.loadProjectsTab('tabProjList')}>LIST PROJECTS</button></div>
		</div>
	)
}
export default Aside;