const router = require('express').Router()
let Plan = require('../models/plan')
let Resource = require('../models/resource')

//get all plans
router.route('/').get((req, res) => {
    Plan.find()
        .then(plans => res.json(plans))
        .catch(err => res.status(400).json('Error: ' + err))
})

//add new plan
router.route('/').post((req, res) => {
    Resource.findOne({resourceName: req.body.resourceName})
        .then(resource => {
            const chapterNames = resource.chapterNames
            console.log("chapterNames: " + chapterNames)

            const chapterTimes = resource.chapterTimes
            console.log("chapterTimes: " + chapterTimes)

            const chaptersDone = resource.chaptersDone
            console.log("chaptersDone: " + chaptersDone)

            const chapterWeeks = resource.chapterWeeks
            console.log("chapterWeeks: " + chapterWeeks)

            const username = req.body.username
            const testType = req.body.testType
            const testDate = Date.parse(req.body.testDate)
            const timePerWeek = Number(req.body.timePerWeek)
            const resourceName = req.body.resourceName
            const speedMode = req.body.speedMode

            console.log("chapterNames2: " + chapterNames)

            const newPlan = new Plan({
                username,
                testType,
                testDate,
                timePerWeek,
                resourceName,
                chapterNames,
                chapterTimes,
                chaptersDone,
                chapterWeeks,
                speedMode
            })

            newPlan.save()
                .then(() => res.json('Plan added!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => {
            console.log('in catch add post')
            res.status(400).json('Error: ' + err)
        })
})

//get specific plan
router.route('/:name').get((req, res) => {
    Plan.findOne({username: req.params.name})
        .then(plan => res.json(plan))
        .catch(err => {
            console.log('in catch get specific')
            res.status(400).json('Error: ' + err)
        })
})

//delete plan
router.route('/:name/:resource').delete((req, res) => {
    Plan.findOneAndDelete({resourceName: req.params.resource, username: req.params.name})
        .then(() => res.json('Plan Deleted.'))
        .catch(err => {
            console.log('in catch delete')
            res.status(400).json('Error: ' + err)
        })
})

//update plan
/*router.route('/:name/:resource').post((req, res) => {
    Plan.findOne({resourceName: req.params.resource, username: req.params.name})
        .then(plan => {
            plan.username = req.body.username
            plan.testType = req.body.testType
            plan.testDate = Date.parse(req.body.testDate)
            plan.timePerWeek = Number(req.body.timePerWeek)
            plan.resourceName = req.body.resourceName

            plan.save()
                .then(() => res.json('Plan updated!'))
                .catch(err => {
                    console.log('in catch for update save')
                    res.status(400).json('Error: ' + err)
                })
        })
        .catch(err => {
            console.log('in catch update')
            res.status(400).json('Error: ' + err)
        })
})*/

//update week numbers and times in plan
router.route('/generate').post((req, res) => {
    let speedFactor
    Plan.findOne({resourceName: req.body.resourceName, username: req.body.username})
        .then(plan => {
            if (plan.speedMode == 0) {
                speedFactor = 1.5
            } else if (plan.speedMode == 2) {
                speedFactor = 0.75
            } else {
                speedFactor = 1
            }
            console.log(plan.chapterWeeks)
            plan.chapterTimes = plan.chapterTimes.map(time => time*speedFactor)
            let numChapters = plan.chapterNames.length
            let maxTime = plan.timePerWeek
            let timeSpent = 0
            let weekNum = 1

            for (i = 0; i < numChapters; i++) {
                if (timeSpent > maxTime) {
                    timeSpent = 0
                    weekNum += 1
                }
                plan.chapterWeeks[i] = weekNum
                timeSpent += plan.chapterTimes[i]
            }

            console.log("chapterWeeks: " + plan.chapterWeeks)

            plan.markModified('chapterWeeks')
            plan.markModified('chapterTimes')

            plan.save()
                .then(() => res.json('Generate Plan!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => {
            console.log('in catch generate post')
            res.status(400).json('Error: ' + err)
        })
})

module.exports = router
