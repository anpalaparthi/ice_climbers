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
    const username = req.body.username
    const testType = req.body.testType
    const testDate = Date.parse(req.body.testDate)
    const timePerWeek = Number(req.body.timePerWeek)
    const resourceName = req.body.resourceName
    const speedMode = req.body.speedMode

    const newPlan = new Plan({
        username,
        testType,
        testDate,
        timePerWeek,
        resourceName,
        speedMode
    })

    newPlan.save()
        .then(() => res.json('Plan added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

//get specific plan
router.route('/:name/:resource').get((req, res) => {
    Plan.findOne({resourceName: req.params.resource, username: req.params.name})
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
router.route('/generate/:name').post((req, res) => {
    let speedFactor
    Plan.findOne(/*"resource.resourceName": req.params.resource,*/ {username: req.params.name})
        .then(plan => {
            if (plan.speedMode == 0) {
                speedFactor = 1.5
            } else if (plan.speedMode == 2) {
                speedFactor = 0.75
            } else {
                speedFactor = 1
            }
            plan.book.chapterTimes = plan.book.chapterTimes.map(time => time*speedFactor)
            let numChapters = plan.book.chapterNames.length
            let maxTime = plan.timePerWeek
            let timeSpent = 0

            for (i = 0; i <= numChapters; i++) {
                while (timeSpent <= maxTime) {
                    plan.book.chapterWeeks[i] = i + 1
                    timeSpent += plan.book.chapterTimes[i]
                }
            }
        })
})

module.exports = router
