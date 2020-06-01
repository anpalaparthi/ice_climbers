const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const fs = require("fs")
let Resource = require('../models/resource')

const uploadPath = path.join('public', Resource.coverImageBasePath)
const imageMimeTypes = ["image/jpeg", "image/png","image/gif", "image/jpg"]
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})

//get all resources
router.route('/').get((req, res) => {
    Resource.find()
        .then(resources => res.json(resources))
        .catch(err => res.status(400).json('Error: ' + err))
})

//add new resource
router.route('/').post(upload.single('cover'), (req, res) => {
    const fileName = req.file != null ? req.file.filename: null
    let coverImgName

    const resourceName = req.body.resourceName
    const testType = req.body.testType
    const chapterNames = Array(req.body.chapterNames)
    const chapterTimes = Array(req.body.chapterTimes)
    if (fileName) {
        coverImgName = fileName
    } else {
        coverImgName = req.body.coverImgName
    }

    const newResource = new Resource({
        resourceName,
        testType,
        coverImgName,
        chapterNames,
        chapterTimes
    })

    newResource.save()
        .then(() => res.json('Resource added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

//get specific resource
router.route('/:resource').get((req, res) => {
    Resource.findOne({resourceName: req.params.resource})
        .then(resource => res.json(resource))
        .catch(err => res.status(400).json('Error: ' + err))
})

//delete specific resource
router.route('/:resource').delete((req, res) => {
    Resource.findOneAndDelete({resourceName: req.params.resource})
        .then(() => res.json('Resource Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

//update resource
router.route('/:resource').post((req, res) => {
    Resource.findOne({resourceName: req.params.resource})
        .then(resource => {
            resource.resourceName = req.body.resourceName
            resource.testType = req.body.testType
            resource.coverImgName = req.body.coverImgName
            resource.chapterNames = Array(req.body.chapterNames)
            resource.chapterTimes = Array(req.body.chapterTimes)

            resource.save()
                .then(() => res.json('Resource updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

function removeBookCover(filename) {
    fs.unlink(path.join(uploadPath, filename), err => {
        if (err) console.error(err)
    })
}

module.exports = router