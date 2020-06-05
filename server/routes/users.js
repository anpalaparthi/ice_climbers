const router = require('express').Router()
let User = require('../models/user')
const bcrypt = require('bcrypt')

const passport = require('passport')

const initializePassport = require('../passport-config')
initializePassport(
    passport,
    email => User.findOne({email: email}),
    id => User.findById()
)

//get all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

//login route
router.route('/login').post((req, res) => {
    console.log("post")

    User.findOne({email: req.body.email, password: req.body.password})
        .then(user => {
            console.log("email: " + user.email + " password: " + user.password + " username: " + user.username)
            user.loginStatus = true
            res.json(user.loginStatus)

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(401).json('Incorrect Username or Password. Error: ' + err))

})

//add new user
router.route('/').post((req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    console.log("test console log")

    const newUser = new User({
        username,
        password,
        email
    })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error3: ' + err))
})

//get specific user
router.route('/:name').get((req, res) => {
    User.findOne({username: req.params.name})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
})

//delete specific user
router.route('/:name').delete((req, res) => {
    User.findOneAndDelete({username: req.params.name})
        .then(() => res.json('User Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

//update user
router.route('/:name').post((req, res) => {
    User.findOne({username: req.params.name})
        .then(user => {
            user.username = req.body.username
            user.password = req.body.password
            user.email = req.body.email

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router