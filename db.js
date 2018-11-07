const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bbq', { useNewUrlParser: true });

const articleSchema = new mongoose.Schema({
    Content: String,
    Name : String,
    selected : String,
    sousuo : String,
    num : Number,
    biaoji : Number,
})

 


module.exports = mongoose.model('article', articleSchema);