const mongoose = require("mongoose")
const Schema = mongoose.Schema

const planSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        minlength: 3
    }, testType: {
        type: String,
        required: true
    }, testDate: {
        type: Date,
        required: true,
    }, createdOn: {
        type: Date,
        required: true,
        default: Date.now
    }, timePerWeek: { //in minutes
        type: Number,
        required: true,
        minValue: 1
    }, resourceName: { //database id for resource model
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Plan', planSchema)