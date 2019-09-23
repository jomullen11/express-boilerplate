require("dotenv").config();
// all other imports below here

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.use('/api/data', routes.data)
app.use('/api/other', routes.other)

app.get('/*', (req, res) => {

    res.status(200).send('Hello World')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})