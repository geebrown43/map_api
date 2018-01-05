const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const index = require('./routes/index')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', index)


app.listen(port, () => {
    console.log('Listening on port: ' + port)
})