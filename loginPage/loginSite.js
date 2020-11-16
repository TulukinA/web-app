const path = require ('path')

const express = require ('express')
const app = express()

const helmet = require('helmet')
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))

app.get('/',(req, res, next)=>{
    res.send('sanity check')
})

app.get('/login',(req, res, next)=>{
    res.render('login')
})


app.listen(3000)
console.log('Server listening on port 3000...')