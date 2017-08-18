// main starting point of application

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Router from './router';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

//DB setup
const db = mongoose.connect('mongodb://127.0.0.1:27017/authdb');

//attach lister to connected event
mongoose.connection.once('connected', function() {
	console.log("Connected to mongo database")
});

//app setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
Router(app);
//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("server listing on:",port);
