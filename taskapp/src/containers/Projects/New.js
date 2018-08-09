import { connect } from 'react-redux';
import New from '../../components/projects/new';
import * as actions from '../../actions/index';

const mapStateToProps = state => {
	return{
		successData: state.projectsReducer.successData
	}
}

const mapDispatchToProps = dispatch => {
	return{
		saveNewProject: (newProjObj) => {
			dispatch(actions.saveNewProject(newProjObj))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(New);