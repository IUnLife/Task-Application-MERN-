const express = require('express');
var router = express.Router();

const Projects = require('../models/projects');

//Create a project
router.post('/', function(req, res, next){
	const project = new Projects(req.body);
	project.save().then(project => {
		res.json(project);
	})
	.catch(err => {
		res.status(400).json({status: "Error while creating the new project", message: err.message});
	});
});

//get all projects
router.get('/',function(req,res){
		Projects.find().then(projectlist => {
			res.json(projectlist);
		});

});

//get a project
router.get('/:pid', function(req,res){
	const pid = req.params.pid;
	const query = Projects.find({'pid':pid}, function(err, project){
		res.json(project);
	});
});

//delete a project
router.delete('/:pid', function(req,res){
	Projects.findOneAndRemove(
		{'pid': req.params.pid},
		function(err, project){
			if(err) res.json(err);
			res.json('Project deleted successfully!');
		}
	);
});

module.exports = router;



