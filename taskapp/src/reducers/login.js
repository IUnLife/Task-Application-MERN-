const loginStateInitial = {
	loginSessionUsername: '',
	loginStatus: false
}

const loginReducer = (state = loginStateInitial, action) => {
		console.log(action);
	switch(action.type){
		case 'DO_LOGIN':
			return{
				loginSessionUsername: action.logindetails.username,
				loginStatus: action.logindetails.authStatus
			}
			case 'DO_LOGOUT':
				return {
					loginSessionUsername: '',
					loginStatus: false
				}
		 default:
		 	return state;
	}

}

export default loginReducer;