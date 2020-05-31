const mongoose = require("mongoose")
const Schema = mongoose.Schema

const chapterSchema = new Schema({
    chapterNames: {
        type: Array,
        required: true
    }, chapterTimes: {
        type: Array,
        required: true
    }
})

const resourceSchema = new Schema({
    resourceName: {
        type: String,
        required: true,
        unique: true
    },
    testType: {
        type: String,
        required: true
    },
    chapters: {
        type: Object,
        of: chapterSchema,
        required: true
    },
    coverImgName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Resource', resourceSchema)