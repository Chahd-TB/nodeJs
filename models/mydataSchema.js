const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articleSchema = new Schema({
    userNameee: String
})

const Mydata= mongoose.model("Mydataa",articleSchema)

// export the module 
module.exports = Mydata