const router = require('express').Router()
let Resource = require('../models/resource')

//get all resources
router.route('/').get((req, res) => {
    Resource.find()
        .then(resources => res.json(resources))
        .catch(err => res.status(400).json('Error: ' + err))
})

//get all resources by search
router.route('/search').post((req, res) => {
    let searchOptions = {}
    if (req.body.resourceName != null && req.body.resourceName !== '') {
        searchOptions.resourceName = new RegExp(req.body.resourceName, 'i')
    }
    Resource.find(searchOptions)
        .then(resources => res.json(resources))
        .catch(err => res.status(400).json('Error: ' + err))
})

//add new resource
router.route('/').post((req, res) => {
    const resourceName = req.body.resourceName
    const testType = req.body.testType
    const chapterNames = Array(req.body.chapterNames)
    const chapterTimes = Array(req.body.chapterTimes)

    const newResource = new Resource({
        resourceName,
        testType,
        chapterNames,
        chapterTimes
    })

    newResource.save()
        .then(() => res.json('Resource added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

//get specific resource, changed get to post
router.route('/:resource').get( async (req, res) => {
    try {
        Resource.findOne({resourceName: req.params.resource})
            .then(resource => res.json(resource))
    } catch {
        error = (err => res.status(400).json('Error: ' + err))
    }
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
            resource.chapterNames = Array(req.body.chapterNames)
            resource.chapterTimes = Array(req.body.chapterTimes)

            resource.save()
                .then(() => res.json('Resource updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router