import React, { Component } from 'react';

import Aside from '../../containers/Projects/Aside';
import Section from './section';
import Styles from '../css/common-css';
import ProjectDetail from './detail';

class ProjectsComponent extends Component {
		componentDidMount() {
			this.props.loadProjects();
		}
		render(){
			return (
					<div className="row">
							<Aside />
							{ !this.props.projectOnlyTasks && <Section activetab = {this.props.activeTab} projects={this.props.allProjects} /> }
							{ this.props.projectOnlyTasks && <ProjectDetail ptasks={this.props.projectOnlyTasks} /> }
					</div>
			)
		}
}

export default ProjectsComponent;