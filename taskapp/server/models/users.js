const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let Users = new mongoose.Schema({
	email: {type: String, required: true, trim: true, unique: true},
	username: {type: String, required: true, trim: true, unique: true},
	password: {type: String, required: true},
	passwordConf: {type: String, required: true},
	firstname: String,
	lastname: String
}, {collection: 'users'});

//authenticate input against databse
Users.statics.authenticate = function(email,password, callback){
	Users.findOne({email: email})
	.exec(function(err, user){
		if(err){
			return callback(err)
		}else if(!user){
			var err = new Error('User not found.');
			err.status = 401;
			return callback(err);
		}
		bcrypt.compare(password, user.password, function (err, result) {
			if (result === true) {
				return callback(null, user);
			} else {
				return callback();
			}
		})
	});
}

//hashing a password before saving it to the database
Users.pre('save', function (next) {
	var user = this;
	bcrypt.hash(user.password, 10, function (err, hash) {
		if (err) {
			return next(err);
		}
		user.password = hash;
		user.passwordConf = hash;
		next();
	})
});

//hashing a password before saving it to the database
Users.pre('save', function (next) {
	var user = this;
	bcrypt.hash(user.passwordConf, 10, function (err, hash) {
		if (err) {
			return next(err);
		}
		user.passwordConf = hash;
		next();
	})
});


var User = mongoose.model('Users',Users);
module.exports = User;


