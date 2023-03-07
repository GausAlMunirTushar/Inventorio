const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    password: {
        type: String,
    },
    photo: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, {versionKey: false})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel;