import { takeEvery, all, put,cancel, call} from 'redux-saga/effects';
import { delay } from 'redux-saga';

import axios from 'axios';
import CONFIG from './config';


const SERVER_URL = CONFIG.SERVER_URL;
//const URL_USERS = SERVER_URL+CONFIG.ENDPOINT_USERS;
const URL_PROJECTS = SERVER_URL + CONFIG.ENDPOINT_PROJECTS;
const URL_TASKS = SERVER_URL + CONFIG.ENDPOINT_TASKS;


//...........................................................

/* export function* userAuthenticationAPI(action) {
	const response = yield call(axios.get, URL_USERS+'/'+ action.logindetails.username);
	if(response.data.length > 0){
		yield put({
			type: 'AUTHENTICATE_USER',
			status: true,
			userdata: response.data
		});
	}
	else{
			yield put({
				type: 'AUTHENTICATE_USER',
				status: false
			});
	}
} */

export function* loadProjectsAPI(){
	const response = yield call(axios.get, URL_PROJECTS);
	//if(response.data.length > 0){
		yield put({ type: 'PROJECTS_DATA', pdata: response.data});
	//}
}

export function* loadTasksAPI() {
	const response = yield call(axios.get, URL_TASKS);
	//if (response.data.length > 0) {
		yield call(delay, 500);
		yield put({
			type: 'TASKS_DATA',
			tdata: response.data
		});
//	}
}
export function* saveTaskAPI(action) {
	const response = yield call(axios.post, URL_TASKS, action.newtaskobj);

	if (response.data.pid > 0) {
		yield put({
			type: 'SAVED_TASK',
			tid: response.data.tid,
			tname: response.data.tname
		});
		  yield call(delay, 1500);
			yield put({
				type: 'LOAD_TASKS'
			});
	}
}

export function* saveProjectAPI(action){
	const response = yield call(axios.post, URL_PROJECTS, action.newprojobj);
	//console.log(response);
	//if(response.data.pid > 0){
		yield put({type: 'SAVED_PROJECT', pid: response.data.pid, pname:response.data.pname});
		yield call(delay, 1000);
		yield put({type: 'LOAD_PROJECTS'});
	//}
}

export function* updateTaskStatusAPI(action) { //debugger;
	yield call(axios.put, URL_TASKS + '/' + action.data.tid, action.data);
	//yield call(delay, 500);
		yield put({
			type: 'LOAD_TASKS'
		});

//shoot timer - if status changes to In Progress and stop timer if completed
	if(action.data.status === '1')
		yield put({type: 'START_TIMER', tid: action.data.tid});
	else if(action.data.status === '2')
		yield put({type: 'STOP_TIMER', tid: action.data.tid});

	}

	export function* loadProjectAllTasksAPI(action){
		const response = yield call(axios.get, URL_TASKS+'/'+action.pid);
		yield put({
			type: 'PROJECT_ALL_TASKS', ptasks: response.data
		});
	}

//Launch Timer on status Updates
export function* startTimerAPI({type,tid}){
	yield call(delay, 1000);
	yield put({type: 'UPDATE_TIMER', tid: tid })
}

export function* stopTimerAPI(saga) {
	yield cancel(saga);
}

export function* takeUpdateTimer(){
	const timer = yield takeEvery('UPDATE_TIMER', startTimerAPI);
	yield takeEvery('STOP_TIMER', stopTimerAPI, timer);
}

export function* takeStartTimer(){
	yield takeEvery('START_TIMER', startTimerAPI);
}

export function* takeUpdateTask(){
	yield takeEvery('UPDATE_TASK_STATUS', updateTaskStatusAPI);
}

export function* takeSaveProject(){
	yield takeEvery('SAVE_PROJECT', saveProjectAPI);
}
export function* takeSaveTask() {
	yield takeEvery('SAVE_TASK', saveTaskAPI);
}
/* export function* takeLogin() {
		yield takeEvery('DO_LOGIN', userAuthenticationAPI);
} */

export function* takeProjectAllTasks() {
	yield takeEvery('LOAD_PROJECT_TASKS', loadProjectAllTasksAPI);
}

export function* takeLoadProjects(){
		yield takeEvery('LOAD_PROJECTS', loadProjectsAPI);
}
export function* takeLoadTasks() {
	yield takeEvery('LOAD_TASKS', loadTasksAPI);
}



//root tasks

export default function* rootSaga() {
		yield all([
			takeLoadProjects(),
			takeSaveProject(),
			takeLoadTasks(),
			takeSaveTask(),
			takeUpdateTask(),
			takeProjectAllTasks(),
			/* takeStartTimer(),
			takeUpdateTimer() */

		]);
}


