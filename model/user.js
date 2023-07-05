const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
        email:{ type: String, required: true, unique: true},
		password: { type: String, required: true },
		confirmpassword: { type: String, required: true }
	},
	{ collection: ' ABESs' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model