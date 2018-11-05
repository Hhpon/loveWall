const mongoose = require('mongoose');

let env = process.env.NODE_ENV || 'development'
let dbUrl = 'mongodb://127.0.0.1:20811/loveWall'

if (env === 'development') {
    dbUrl = 'mongodb://127.0.0.1/loveWall'
}

mongoose.connect(dbUrl, { useNewUrlParser: true });

const articleSchema = new mongoose.Schema({
    Content: String,
    Name: String,
    selected: String,
    sousuo: String,
    num: Number,
})




module.exports = mongoose.model('article', articleSchema);