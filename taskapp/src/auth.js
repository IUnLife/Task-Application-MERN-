//import React from 'react';
import axios from 'axios';
import CONFIG from './config';
const auth = {
   isAuthenticated : false,
   message:'',
   authenticate(username, password, callback) {
			 axios.post(CONFIG.SERVER_URL+CONFIG.ENDPOINT_LOGIN, {
           username: username,
           password: password
       }).then((res) => {
           this.isAuthenticated = true,
           this.message = '';
           setTimeout(callback, 100);
       }).catch( (err) => {
				 		console.log('Error while authenticating ',err);
           this.message = err.response.data;
           setTimeout(callback, 100);
       })
	 },
	 authlogout(callback) {
		 this.isAuthenticated = false,
		 this.message ='';
		 setTimeout(callback, 100);

	 }
}

export default auth;