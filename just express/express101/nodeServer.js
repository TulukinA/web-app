const http = require('http')

// fs = file system module! fs is built into Node. seee above
// fs gives node access to THIS computers file system.
const fs = require('fs')

// the http module has a a createServer method
//takes 1 arg:
// 1. callback, callback, has 2 arg: req, res

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        console.log(`A request was made to: ${req.url}`)
        // console.log(req)
        //write head takes 2 arg
        // 1. status code
        // 2. object for the mime-type
        res.writeHead(200,{'content-type': 'text/html'})
        // res.write('')
        const homePageHTML = fs.readFileSync('node.html')
        res.write(homePageHTML)
        res.end()
    } 
    else if (req.url === "/node.png"){
        res.writeHead(200,{'content-type': 'image/png'})
        const image = fs.readFileSync('node.png')
        res.write(image)
        res.end()
    }
    else if (req.url === "/styles.css"){
        res.writeHead(200,{'content-type': 'text/css'})
        const css = fs.readFileSync('styles.css')
        res.write(css)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.write('<h4>Sorry this isnt the page you are looking for!</h4>')
        res.end()
    }
})

// createServer returns an object with a listen method 
// listen takes 1 arg:
// 1. port to listen for http traffic on 

server.listen(3000)
