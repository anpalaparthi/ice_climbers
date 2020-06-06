const mongoose = require("mongoose")
const Schema = mongoose.Schema
const path = require("path")

const chapterSchema = new Schema({
    chapterNames: [{
        type: String,
        required: true
    }], chapterTimes: [{ //in minutes
        type: Number,
        required: true
    }]
})

const resourceSchema = new Schema({
    resourceName: {
        type: String,
        required: true,
        unique: true,
    },
    testType: {
        type: String,
        required: true
    },
    chapterNames: {
        type: Array,
        required: true
    },
    chapterTimes: { //in minutes
        type: Array,
        required: true
    },
    chaptersDone: {
        type: Array,
        required: true,
        default: [false]
    },
    /*chapters: {
        type: Object,
        of: chapterSchema,
        required: true
    },*/
})

module.exports = mongoose.model('Resource', resourceSchema)
