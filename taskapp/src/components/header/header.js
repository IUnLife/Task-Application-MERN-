import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../src/logo.svg';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import auth from '../../auth';

class Header extends Component {
	constructor(props) {
		super(props);
		this.applogout = this.applogout.bind(this);

	}

	applogout(){
		let props = this.props;
		auth.authlogout(function(){
			props.logout()
		});
	}
	render(){
		return(
			<header className="App-header">
				<div className="header-left">
					<div className="logo"><NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink></div>
					<h1 className="App-title"> Task Application </h1>
				</div>
				<nav role="navigation">
					<ul>
						<li><NavLink to="/projects">Projects</NavLink></li>
						<li><NavLink to="/tasks">Tasks</NavLink></li>
						{
							!this.props.loginStatus ? <li><NavLink to="/login">Sign In</NavLink></li> : <li><NavLink to="/logout" onClick={this.applogout}>Sign Out</NavLink></li>
						}
					</ul>
			</nav>
			</header>

		)
	}
}

//export default Header;

const mapStateToProps = state => {
	console.log('header: ',state.loginReducer);
	return {
		loginSessionUsername: state.loginReducer.loginSessionUsername,
		loginStatus: state.loginReducer.loginStatus
	}
}

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(actions.logout())
})



export default connect(mapStateToProps, mapDispatchToProps)(Header);