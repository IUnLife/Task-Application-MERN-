const express = require('express');
var router = express.Router();
const Users = require('../models/users');
const bcrypt = require('bcrypt');

router.post('/', function(req,resp,next){
	 const user = new Users(req.body);
	 Users.findOne({username: user.username}, function(err, userResp ){
		 if (userResp){
				bcrypt.compare(user.password, userResp.password, function (err, res) {
					if(res){
						resp.json('Sucessfully Authenticated')
					}else{
						resp.status(403).json('Invalid Username and Password')
					}
				});
			}else{
				resp.status(403).json('User does not exists');
			}
   })
})



module.exports= router;