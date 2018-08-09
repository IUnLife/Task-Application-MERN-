const mongoose = require('mongoose');
var Schema = mongoose.Schema; // Define collection for schema

var Tasks = new Schema({
	tid: { type: Number,required: true, unique: true},
	pid: {type: Number, required: true},
	name: { type: String, required: true},
	desc: { type: String},
	age: {type: Number},
	status: { type: Number, required: true},
}, {collection: 'tasks'}); // products is name - table name(called collection in mongodb)

module.exports = mongoose.model('Tasks', Tasks);