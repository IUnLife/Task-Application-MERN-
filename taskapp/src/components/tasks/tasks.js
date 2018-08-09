import React, { Component } from 'react';

import Aside from '../../containers/Tasks/Aside';
import Section from './section';
import Styles from '../css/common-css';

class TasksComponent extends Component {
		componentDidMount() {
			this.props.loadTasks();
		}
		render(){
			return (
					<div className="row">
							<Aside activetab = {this.props.activeTab} />
							<Section activetab = {this.props.activeTab} tasks={this.props.allTasks} />
					</div>
			)
		}
}

export default TasksComponent;