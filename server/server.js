if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000

const mongoose = require('mongoose')
const connection = mongoose.connection

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
