import { connect } from 'react-redux';
import Aside from '../../components/projects/aside';
import * as actions from '../../actions/index';

const mapStateToProps = state => {
	return{
		projectsActiveTab: state.projectsReducer.projectsActiveTab
	}
}

const mapDispatchToProps = dispatch => {
	return{
		loadProjectsTab: (tabname) => {
			dispatch(actions.loadProjectsTab(tabname));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);