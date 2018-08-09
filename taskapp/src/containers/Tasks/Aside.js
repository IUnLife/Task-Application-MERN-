import { connect } from 'react-redux';
import Aside from '../../components/tasks/aside';
import * as actions from '../../actions/index';

const mapStateToProps = state => {
	return{
		tasksActiveTab: state.tasksReducer.tasksActiveTab
	}
}

const mapDispatchToProps = dispatch => {
	return{
		loadTasksTab: (tabname) => {
			dispatch(actions.loadTasksTab(tabname));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);