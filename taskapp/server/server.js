const express = require('express');
const mongoose = require('mongoose'); //doing all operation on mongodb
const bodyParser = require('body-parser');
const cors = require('cors');

const projectsRouter = require('../server/routes/projects');
const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const CONFIG = require('../server/config');
//1. connect to db
// mongodb - protocol to connect on mongodb
const DB = CONFIG.DB_URL;
const PORT = CONFIG.SERVER_PORT;

mongoose.connect(DB, {useNewUrlParser: true})
	.then(() => {
			console.log('\nHello Aayushi! Congos, Mongo Database is connected\n...')
		},err => {
			console.log('Error connecting to database', err)
		}
	)

	//2. Init express app
	const app = express();

	//use body parser
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json()); //sets the type - dispatch requests to JSON
	app.use(cors());



	//http request
	app.get('/', (req, res) => {
		res.send('Hello Aayushi');
	});

	app.use(CONFIG.ENDPOINT_PROJECTS, projectsRouter);
	app.use(CONFIG.ENDPOINT_TASKS, tasksRouter);
	app.use(CONFIG.ENDPOINT_USERS, usersRouter);
	app.use(CONFIG.ENDPOINT_LOGIN, loginRouter);

			//make server
	app.listen(PORT, () => {
		console.log('Task Application Server running on port: ' + PORT);
	});


