import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../../auth';

class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.username = '';
		this.password = '';
		this.login = this.login.bind(this);
	}

login(){
	let props = this.props;
	let username = this.username.value;
	let password = this.password.value;
	auth.authenticate(username, password, function(){
		if(auth.isAuthenticated){
			props.loginToApp({ username: username, authStatus: true });
		}else{
			props.loginToApp({ username: username, authStatus: false });
		}
	});

	//
}
render(){
	const { from } = this.props.location.state || { from: { pathname: '/' } };
	    if (auth.message === '' && this.props.loginStatus) {
        return (
          <Redirect to={from} />
        )
			}
      return (
        <div className="app-login">
						{this.props.loginStatus ? <h1 className="m-4">Welcome {this.props.loginSessionUsername}</h1> : <h1 className="m-4">Login</h1> }

						{
							auth.message != '' &&
							<div className="form-group row"><label hidden={auth.message ===''} className="warning m-4">{auth.message}</label></div>
						}
						<form id="login-form" className="container m-4" action="#">
							<div className="form-group row">
								<label for="username" className="col-lg-4 text-right">Username:</label>
								<input id="username" className="col-lg-4" type="text" placeholder="Enter your user name" name="login-email" ref={node => { this.username = node}} />
								<label className="col-lg-4">&nbsp;</label>
							</div>
							<div className="form-group row">
								<label for="password" className="col-lg-4 text-right">Password:</label>
								<input id="password" className="col-lg-4" type="password" placeholder="Enter your password" name="login-password" ref={node => { this.password = node}} />
								<label className="col-lg-4">&nbsp;</label>
							</div>
							<div className="form-group row">
								<label for="btn-login" className="col-lg-3">&nbsp;</label>
								<button id="btn-login" type="button" name="login-button" className="btn btn-primary btn-lg"
									onClick= {this.login}
									>Login</button>
							</div>
						</form>
        </div>

			)
		}
}

export default LoginComponent;

