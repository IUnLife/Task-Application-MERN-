import { connect } from 'react-redux';
import Projects from '../../components/projects/projects';
import * as actions from '../../actions/index';

const mapStateToProps = state => { //debugger;
	//console.log(state);
	return{
		allProjects: state.projectsReducer.projects,
		activeTab: state.projectsReducer.projectsActiveTab,
		projectOnlyTasks: state.projectsReducer.projectOnlyTasks
	}
}

const mapDispatchToProps = dispatch => {
	return{
		loadProjects: () => { dispatch(actions.loadProjects()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);