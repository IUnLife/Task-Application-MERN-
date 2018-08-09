import Tasks from '../../components/tasks/tasks';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const mapStateToProps = state => {
	//console.log('ALltasks: ',state);
	return{
		allTasks: state.tasksReducer.tasks,
		activeTab: state.tasksReducer.tasksActiveTab
	}
}

const mapDispatchToProps = dispatch => {
	return{
		loadTasks: () => { dispatch(actions.loadTasks()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);