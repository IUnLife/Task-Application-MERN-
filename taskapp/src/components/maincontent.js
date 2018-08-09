import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import HomeComponent from '../components/home';
import TasksComponent from '../containers/Tasks/Tasks';
import ProjectsComponent from '../containers/Projects/Projects';
import LoginComponent from '../containers/Login';
import {PrivateRoute} from '../routes/privateroute';
import auth from '../auth';

const MainContent = () => {
	return(
		<div className="main-content" role="main">
							<Switch>
									<Route exact path="/" component={HomeComponent} />
									<PrivateRoute authed={auth.isAuthenticated} path="/tasks" component = {TasksComponent} />
									<Route path="/login" component = {LoginComponent} />
									<Route path="/logout" component = {HomeComponent} />
									<PrivateRoute authed={auth.isAuthenticated} path="/projects" component={ProjectsComponent} />

									{/* <Route path="/tasks" component = {TasksComponent} />
									<Route path="/projects" component = {ProjectsComponent} /> */}
							</Switch>

		</div>
	)
}
export default MainContent;