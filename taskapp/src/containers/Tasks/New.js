import { connect } from 'react-redux';
import New from '../../components/tasks/new';
import * as actions from '../../actions/index';

const mapStateToProps = state => {
	return{
		successData: state.tasksReducer.successData,
		tasks: state.tasksReducer.tasks
	}
}

const mapDispatchToProps = dispatch => {
	return{
		saveNewTask: (newTaskObj) => {
				console.log(newTaskObj);
			dispatch(actions.saveNewTask(newTaskObj))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(New);