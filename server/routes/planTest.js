const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
    {message: "Hello Ice Climberzzzz"}
})

module.exports = router
