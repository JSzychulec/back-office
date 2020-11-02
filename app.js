const db = require('./config/mongoose').connect();
const { port } = require('./config/env');
const app = require('./config/express');

//Test
const transporter = require('./config/nodemailer')

db.once('open', () => {
	console.log('Connected to the database')
	app.listen(port, () => {
		console.log(`Server is working on port ${port}`)
	});
});
db.once('error', () => console.log('There was an error while connecting to the database'));

module.exports = app;