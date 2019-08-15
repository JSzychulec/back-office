const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new Schema({
	email: {
		type: String,
		lowercase: true,
		trim: true,
		required: true,
		unique: true,
		alias: 'username'
	},
	password: {
		type: String,
		required: true,
		minlength: 3
	},
	role: {
		type: String,
		enum: ['admin', 'user'],
		default: 'user',
		required: true,
	},
	social_media: {
		type: Map,
		of: String,
	}
}, { timestamps: true })


/**
 * Verify that passed password matches encrypted one.
 */
userSchema.methods.verifyPassword = async pass => {
	try {
		return await bcrypt.compare(pass, this.password)
	} catch (error) {
		return error;
	}
}


/**
 * Encrypting password before saving
 */
userSchema.pre('save', async function(next) {
	try {
		this.password = await bcrypt.hash(this.password, 10);
		next();
	} catch (error) {
		next(error);
	}
})

module.exports = model('user', userSchema);