import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
const app = express();
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const port = 8000;
Connection(USERNAME, PASSWORD);
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
DefaultData();
