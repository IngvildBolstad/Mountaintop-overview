require('dotenv').config()

const express = require('express')
const app = express()

const path = require('path')
const createError = require('http-errors')

// Database setup
const db = require('./models')
db.sequelize.sync({ force: false, alter: true })

// Middleware
app.use(express.json())

// Setting up default endpoint
app.get('/', (req, res) => {
    return res.status(200).json({ message: "You've hit the GET / endpoint!" })
})


// Setting up port
const port = process.env.PORT || 3000

app.listen(port, () => { // Anonymous arrow function
    console.log(`Server is listening on ${port}`)
})