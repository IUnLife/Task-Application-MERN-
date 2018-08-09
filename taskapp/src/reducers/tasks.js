const tasksInitialState = {
	tasks: [],
	tasksActiveTab: 'tabTaskList',
	successData: []
}
let updateRestBuckets = (state, newTask) => {
	let updatedList = state.map(task => {
		if (task.tid === newTask.tid) return newTask;
		else return task;
	});
	//console.log('updatedList', updatedList);
	return updatedList;
}

let updateTaskAge = (state, taskid) => {
	let updatedList = state.map(task => {
		if (task.tid === taskid) return { ...task,
			age: (task.age + 1)
		};
		else return task;
	})
	return updatedList;
}

const tasksReducer = (state = tasksInitialState, action) => {
	switch(action.type){
		case 'TASKS_DATA':
			return{
				tasks: action.tdata,
						tasksActiveTab: state.tasksActiveTab
			}

			case 'LOAD_TASKS':
				return{
					tasksActiveTab: 'tabTaskList',
					tasks: state.tasks
				}

		case 'LOAD_TASKS_TABS':
			return {
				tasksActiveTab: action.tabname,
						tasks: state.tasks
			}
			case 'SAVED_TASK':
				return{
					successData: {tid: action.tid, tname: action.tname},
							tasksActiveTab: state.tasksActiveTab,
							tasks: state.tasks
				}

			case 'UPDATE_TASK_STATUS': //console.log('hello UPDATE_TASK_STATUS',action.data);
				return{
					tasks: updateRestBuckets(state.tasks, action.data)
				}
			case 'UPDATE_TIMER':
				return {
					tasks: updateTaskAge(state.tasks, action.tid),
					tasksActiveTab: 'tabTaskList'
				}

		default:
			return state;
	}
}

export default tasksReducer;