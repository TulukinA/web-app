const express = require('express')
const app = express()

// Express = 2 things
// 1. Router
// 2. Middleware that comprises a webframework
function validateUser(req, res, next){
    res.locals.validated = true 
    console.log('Validated Ran!')
    next()
}
app.use('/admin', validateUser)

app.get('/', (req, res, next) =>{
    res.send('<h1>Main Page</h1>')
    console.log(res.locals.validated)
})
app.get('/admin', (req, res, next) =>{
    res.send('<h1>Admin Page</h1>')
    console.log(res.locals.validated)
})

app.listen(3000)
console.log('running on port 3000...')