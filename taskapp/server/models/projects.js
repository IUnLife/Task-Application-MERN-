const mongoose = require('mongoose');
var Schema = mongoose.Schema; // Define collection for schema

var Projects = new Schema({
	pid: { type: Number, required: true, unique:true},
	name: { type: String, required: true},
	desc: { type: String},
	type: { type: String, required: true},
}, {collection: 'projects'}); // products is name - table name(called collection in mongodb)

module.exports = mongoose.model('Projects', Projects);