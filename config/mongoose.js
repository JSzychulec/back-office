const mongoose = require('mongoose');
const { mongo } = require('./env');

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
}

/**
 * @todo Setup mongodb related logging
 */

mongoose.connection.on('error', (error) => {
	console.log(error)
})

mongoose.connection.on('open', () => {
	console.log('Mongoose connection acquired');
})


exports.connect = () => {
	mongoose.connect(mongo.uri, options);
	return mongoose.connection;
}