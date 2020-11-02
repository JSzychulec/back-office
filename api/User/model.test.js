const User = require('./model');

describe('User model', () => {
	describe('email', () => {
		it('Should not be valid without email', async () => {
			const user = new User({ name: "asd", password: "asd" })
			try {
				await user.validate()
			} catch (error) {
				expect(error.name).toEqual("ValidationError")
			}

		})
	})
})