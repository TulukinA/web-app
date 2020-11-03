const express = require('express')
const app = express()

const helmet = require('helmet')

app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/ajax', (req, res) => {
    console.log(req.headers)
    console.log(req.body)
    res.send('Test to see response from AJAX')
    res.json('test')
})

// app.get('/', (req, res, next) => {
//     res.send('<h1>Main Page</h1>')
//     // console.log(res.locals.validated)
// })

app.listen(3000)