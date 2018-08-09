import { connect } from 'react-redux';
import Task from '../../components/tasks/task';
import * as actions from '../../actions/index';

const mapStateToProps = state => {
	return {
		allTasks: state.tasksReducer.tasks
	}
}

const mapDispatchToProps = dispatch => {
	return{
		updateTaskStatus: (taskObj, status) => dispatch(actions.updateTaskStatus(taskObj, status))
	}
}

export default connect(null,mapDispatchToProps)(Task);