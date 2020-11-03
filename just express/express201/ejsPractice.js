const path = require('path')

const express = require('express')
const app = express()
const ejs = require('ejs')

const helmet = require('helmet')
app.use(helmet())

// serve up satatic files
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

// console.log(__dirname)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'views'))

function validateUser(req, res, next){
    // validated logic
    res.locals.validated = true
    console.log('Validated ran')
    next()
}
app.use('/about', validateUser)

app.get('/', (req, res, next) => {
    // the data, in the 2nd arg, is going to append to res.locals
    res.render('index', {
        msg: 'Success!',
        msg2: 'Failed',
        //HTML came from DB and we want to drop it in the template
        html: `<p><img src="./express201/media/mountain.png" </p>`
    })
})
app.get('/about', (req, res, next)=> {
    res.send('<h1>About page</h1>')
})


app.listen(3000)