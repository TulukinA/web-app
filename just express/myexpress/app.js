const path = require('path')
const express = require('express')
const app = express()

const helmet = require('helmet')
app.use(helmet())


app.get('/', (req, res, next) => {
    res.send('<h1>Index</h1>')
})

app.use(function (req, res, next) {
    console.log(res)
    res.locals.user = req.user
    res.locals.authenticated = !req.user.anonymous
    next()
})







app.listen(3000)