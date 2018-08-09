import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Header from '../components/header/header';

const mapStateToProps = state => {
	return{
		loginSession: state.loginReducer.loginSession,
		loginStatus: state.loginReducer.loginStatus
	}
}

const mapDispatchToProps = dispatch => {
	return{
		loginToApp: (logindetails) => {
			dispatch(actions.logintoApp(logindetails))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);