const path = require('path')

const express = require('express')
const app = express()

const helmet = require('helmet')
app.use(helmet()) //MY BAD... HELMET ON... READY FOR BATTLE!

// serve up satatic files
app.use(express.static('public'))
// parse json and urlencoded data into req.body
app.use(express.json())
app.use(express.urlencoded())


// app.set(), takes 2 arguments:
// 1. key
// 2. value
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))




app.get('/', (req, res, next)=>{
    res.render('index')
})

app.listen(3000)