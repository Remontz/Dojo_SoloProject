const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [3, 'Username must be at least 4 characters']
    },
    email: {
        type: String,
        required: [true, 'User email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
module.exports = User