const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
	user_id: {
		type: Schema.Types.ObjectId,
		required: true
	},
	name: {
		type: String
	}

}, { timestamps: true })

module.exports = model('task', taskSchema);