const express = require('express')
const app = express()

// app comes with a use method

app.use(express.static('public'))

// app.all('*',(req, res)=>{
//     res.send(`<h1>This is the home page</h1>`)
// })

app.listen(3000)
console.log('Server up and runing on port: 3000!')