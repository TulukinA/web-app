const express = require('express')
const app = express()
//app object has a few methods:
// 1. get
// -Default for all browsers is get
// 2. post
// 3. delete
// 4. put
// 5. all - i will accept any method

// app.post('/',(req, res)=>{
//     let foo = 'bar'; //read foo from request
//     res.send(`post success ${foo}`)
// })
// app.all('/',(req, res)=> {
//     res.send(`<h1>Welcome to all</h1>`)
// })
app.get('/',(req, res)=>{
    console.log(req)
    res.send(`<h1>Welcome to the home GET page!`)
})
app.post('/',(req, res)=>{
    res.send(`<h1>Welcome to the home POST page!</h1>`)
})

app.delete('/',(req, res)=>{
    
})
app.put('/',(req, res)=>{
    res.send('put success')
})

app.listen(3000)
console.log('server up on port 3000.....')