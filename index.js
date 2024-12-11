const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/users')
const auth = require('./routes/auth')
const task = require('./routes/tasks')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use('/user' , user)
app.use('/auth', auth)
app.use('/task' , task)

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)
    .then( () => { console.log('Connected to DataBase Server.')})
    .catch((ex) => { console.error(ex.message)})

app.listen(8888)
    console.log('Server runnng on port 8888.')