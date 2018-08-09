import { connect } from 'react-redux';
import Login from '../components/login/login';


import * as actions from '../actions/index';

const mapStateToProps = state => { console.log(state.loginReducer);
	return{
		loginSessionUsername: state.loginReducer.loginSessionUsername,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);