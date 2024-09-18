const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Mydata = require("./models/mydataSchema")
app.use(express.urlencoded({extanded: true}))

app.get('/', (req, res) => {
  res.sendFile("./views/home.html",{root:__dirname})
})

mongoose.connect('mongodb+srv://chahd:chanyeol@cluster0.0n334.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`)
      })
}).catch((error)=>{
    console.log(error)
})

app.post('/', (req, res) => {
  console.log(req.body)
})



// learning 

// this shows me info about the current file id path exports filename ..etc 
console.log(module)

// exporting or sharing two variables 
const john = "john"
const peter = "peter"

module.exports = {john, peter}
module.exports = sayHiFunction
module.exports.items = ["item1","item2"]
const person = {
  name:"bob"
}
module.exports.singlePerson = person
// or module.exports = items 

// to access them in another file we write 
const names = require("./the_path")
// names is object of the exported variables {john: john ...}
sayHiFunction(names.john)

// built in modules:PATH,OS,FS,HTTP 
const os = require("os")
// infor abour current user username shell homedir ..
const user = os.userInfo()
// method returns the system uptime in seconds 
os.uptime()
os.type()
os.release() //version
os.totalmem()  // Get total system memory (in bytes)
os.freemem() // Get free system memory (in bytes)

const path = require("path")
// This property returns a string representing the separator used by the operating system.
// On Windows, it returns '\ '.
// O(like Linux and macOS) it returns '/'.
path.sep
// path /folder/subfolder/file 
const filePath = path.join("/folder","subfolder","file")
// the end of the path 
const base = path.basename(filePath)
// the whoooole path 
path.resolve(__dirname,"folder","subfolder","file")

// file system 
// first 
const {readFileSync, writeFileSync} = require("fs")
// second 
const first = readFileSync("filePath")
const second = writeFileSync("filePath","the text writing",{flag : "a"})
// third 

const {readFile, writeFile} = require("fs")
// first 
const firsty = readFile("filePath","utf8",(err,result) => {
  // third 
  if(err){
    console.log(err)
    return
  }
  console.log(result)
})
// second 


// HTTP 
const http = require("http")
const server = http.createServer((req,res) =>{
    res.write("welcome to our home page")
    res.end()
})
// localhost:5000 
server.listen(4000)

const _ = require("lodash")

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
// appaer [1,2,3,4] 
// _.flattenDeep() is used to flatten an array completely, removing all nested arrays until you're left with a single-level array.

