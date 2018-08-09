const express = require('express');
var router = express.Router();

const Users = require('../models/users');

//Create a user
router.post('/', function (req, res, next) {
	const user = new Users(req.body);
	user.save().then(user => {
			res.json(user);
		})
		.catch(err => {
			res.status(400).json({
				status: "Error while creating the new user",
				message: err.message
			});
		});
});

//get all users
router.get('/', function (req, res) {
	Users.find().then(userlist => {
		res.json(userlist);
	});

});

//get a user
router.get('/:username', function (req, res) {
	const username = req.params.username;
	const query = Users.find({
		'username': username
	}, function (err, user) {
		res.json(user);
	});
});

//delete a user
router.delete('/:username', function (req, res) {
	Tasks.findOneAndRemove({
			'username': req.params.username
		},
		function (err, user) {
			if (err) res.json(err);
			res.json('User deleted successfully!');
		}
	);
});

module.exports = router;
