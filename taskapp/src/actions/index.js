//LoginActions

export const logintoApp = (logindetails) => ({
	type: 'DO_LOGIN',
	logindetails
});

export const logout = () => ({
	type: 'DO_LOGOUT'
})

export const loadProjects = () => ({
	type: 'LOAD_PROJECTS'
});

export const loadTasks = () => ({
	type: 'LOAD_TASKS'
});

export const loadProjectsTab = (tabname) => ({
	type: 'LOAD_PROJECTS_TABS',
	tabname
});

export const loadTasksTab = (tabname) => ({
	type: 'LOAD_TASKS_TABS',
	tabname
});

export const saveNewProject = (newprojobj) => ({
	type: 'SAVE_PROJECT',
	newprojobj
});

export const saveNewTask = (newtaskobj) => ({
	type: 'SAVE_TASK',
	newtaskobj
});

export const updateTaskStatus = (taskobj, status) => ({
		type: 'UPDATE_TASK_STATUS',
		data: {...taskobj, status}
});

export const showProjectDetail = (pid) => ({
	type: 'LOAD_PROJECT_TASKS',
	pid
});

export const getAllPTasks = (ptasks) => ({
	type: 'PROJECT_ALL_TASKS',
	ptasks
});

export const updateTaskTime = (tid) => ({
	type: 'UPDATE_TIMER',
	tid
});

export const startTimer = (tid) => ({
	type: 'START_TIMER',
	tid
});
export const stopTimer = (tid) => ({
	type: 'STOP_TIMER',
	tid
});
