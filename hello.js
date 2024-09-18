const http = require("http")
const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.end("welcome to our home page")
    }
    else if(req.url === "/about"){
        res.end("welcome to our about page")
    }
    else{
        res.end(`
            <h1>Oops wrong</h1>
            <p>We dont find this page</p>
            <a href="/">back home</a>
            `)
    }
})
// localhost:5000 
server.listen(5000)