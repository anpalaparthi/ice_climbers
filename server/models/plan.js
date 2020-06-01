const mongoose = require("mongoose")
const Schema = mongoose.Schema


//chapters to plans
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
    }, resourceName: { //name for resource model
        type: String,
        required: true,
    }, speedMode: { //slow = 0, normal = 1, fast = 2
        type: Number,
        required: true,
        default: 1
    }
})

module.exports = mongoose.model('Plan', planSchema)