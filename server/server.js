if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const passport = require('passport')

const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => User.find(user => user.email === email),
    id => User.find(user => user._id === id )
    )

const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const homeRouter = require('./routes/home')
const usersRouter = require('./routes/users')
const planRouter = require('./routes/plans')
const resourceRouter = require('./routes/resources')
// const timerRouter = require('./routes/timer')

const mongoose = require('mongoose')
const connection = mongoose.connection

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.use(cors())
app.use(express.json())

app.use('/home', homeRouter)
app.use('/users', usersRouter)
app.use('/plans', planRouter)
app.use('/resources', resourceRouter)
// app.use('/timer', timerRouter)

app.use(express.urlencoded({ extended : false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
