const express = require('express');
var router = express.Router();

const Tasks = require('../models/tasks');

//Create a task
router.post('/', function (req, res, next) {
	const task = new Tasks(req.body);
	task.save().then(task => {
			res.json(task);
		})
		.catch(err => {
			res.status(400).json({status: "Error while creating the new task", message: err.message});
		});
});

//get all tasks
router.get('/', function (req, res) {
	Tasks.find().then(tasklist => {
		res.json(tasklist);
	});

});

//get a task for given project
router.get('/:pid', function (req, res) {
	const pid = req.params.pid;
	const query = Tasks.find({
		'pid': pid
	}, function (err, task) {
		res.json(task);
	});
});
//put a task - UPDATE TASK
router.put('/:tid', function (req, res) {
	const tid = req.params.tid;
	Tasks.findOneAndUpdate({
		'tid': tid
	}, req.body, function (err, task) {
		if (err) res.status(500).json(err);
		res.json('Task updated successfully!');
	});
});

//delete a task
router.delete('/:tid', function (req, res) {
	Tasks.findOneAndRemove({
			'tid': req.params.tid
		},
		function (err, task) {
			if (err) res.json(err);
			res.json('Task deleted successfully!');
		}
	);
});

module.exports = router;
