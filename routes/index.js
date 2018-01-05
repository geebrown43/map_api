const express = require('express')
const router = express.Router()
const db = require('../db/query')

router.get('/', (req, res) => {
    db.getAllMaps()
    .then(data => res.json(data))
})





module.exports = router