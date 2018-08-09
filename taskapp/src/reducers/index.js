import { combineReducers } from 'redux';
import loginReducer from './login';
import projectsReducer from './projects';
import tasksReducer from './tasks';

export default combineReducers({
	loginReducer,
	projectsReducer,
	tasksReducer
});