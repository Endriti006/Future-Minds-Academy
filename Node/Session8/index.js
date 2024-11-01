const express = require('express')
const calculatorController =require('./controllers/calculatorController')

const app = express()

app.use('/calcuatlor', calculatorController)

app.listen(8585)