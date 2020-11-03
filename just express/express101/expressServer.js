//NODEJS is the language 

const path = require('path')

// setInterval(()=> {console.log('1 second')},1000)
//http is a native module and express is a third party module
const express = require('express')
// Ana app is the express function (createApplication inside the Express module)
// invoked and is an Express application 
const app = express()

// serve up static files! only 1 line... take that nodejs
app.use(express.static('public'))


app.all('/',(req, res)=>{
    // res.send(`<h1>This is the home page</h1>`)
    console.log(path.join(__dirname + '/node.html'))
    res.sendFile(path.join(__dirname + '/node.html'))
})

app.all('*', (req, res)=> {
    res.send('<h1>sorry, this page does not exist!</h1>')
})

app.listen(3000)
console.log("the server is listening on port 3000....")