const projectsInitialState = {
	projects: [],
	projectsActiveTab: 'tabProjList',
	successData: [],
	projectOnlyTasks: []
}

const projectsReducer = (state = projectsInitialState, action) => {
	switch(action.type){
		case 'PROJECTS_DATA':
			return{
				projects: action.pdata,
						projectsActiveTab: state.projectsActiveTab
			}

		case 'LOAD_PROJECTS_TABS':
			return{
				projectsActiveTab: action.tabname,
						projects: state.projects
			}
		case 'LOAD_PROJECTS':
		return{
			projectsActiveTab: 'tabProjList',
			projects: state.projects
		}

		case 'SAVED_PROJECT':
			return{
				successData: {pid: action.pid, pname: action.pname},
						projectsActiveTab: state.projectsActiveTab,
						projects: state.projects
			}

		case 'PROJECT_ALL_TASKS':
			return {
				projectOnlyTasks: action.ptasks,
						projectsActiveTab: state.projectsActiveTab,
						projects: state.projects,
						successData: state.successData

			}

		default:
			return state;
	}
}

export default projectsReducer;