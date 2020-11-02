const mongoose = require('mongoose');
const { env, mongo } = require('./env');

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
}

/**
 * @todo Setup mongodb related logging
 */

mongoose.connection.on('error', (error) => {
	env !== "production" && console.log(error)
})

mongoose.connection.on('open', () => {
	env !== "production" && console.log('Mongoose connection acquired');
})


exports.connect = () => {
	mongoose.connect(mongo.uri, options);
	return mongoose.connection;
}