const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/', (req,res) => res.send('This App is running properly!'))
app.get('/ping', (req,res) => res.send('Pong!'))
app.get('/youtube', (req,res) => res.send('Hello, Youtube Indonesia!'))
app.get('/google', (req,res) => res.send('Hello, Google Indonesia!'))
app.get('/twitter', (req,res) => res.send('Hello, Twitter Indonesia!'))
app.get('/discord', (req,res) => res.send('Hello, Discord Indonesia!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})
module.exports = app
