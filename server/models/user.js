const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }, password: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 3
    }, email: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    }, loginStatus: {
        type: Boolean,
        required: true,
        default: false
    }
    }, {
    timestamps: true,
    })

module.exports = mongoose.model('User', userSchema)