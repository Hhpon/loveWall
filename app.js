const express = require('express');
const bodyParser = require('body-parser');
const bbq = require('./db');
const article = require('./db');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//allow custom header and CORS
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

app.post('/article', function (req, res) {
    console.log(req.body);

    let blog = req.body;

    bbq.create(blog, function (err, docs) {
        console.log(docs);
    })
    res.end('我收到了');


})

app.get('/getarticle1', function (req, res) {
    bbq.find(function (err, doc) {
        console.log(doc);
        res.json(doc);
    }).sort("-num").exec(function (err, docs) {
        console.log(docs);
    })
})

app.get('/getarticle2', function (req, res) {
    bbq.find({ selected: /表白/ }, function (err, doc) {
        console.log(doc);
        res.json(doc);
    }).sort("-num").exec(function (err, docs) {
        console.log(docs);
    })
})

app.get('/getarticle3', function (req, res) {
    bbq.find({ selected: /一句/ }, function (err, doc) {
        console.log(doc);
        res.json(doc);
    }).sort("-num").exec(function (err, docs) {
        console.log(docs);
    })
})

app.get('/getarticle4', function (req, res) {
    bbq.find({ selected: /吐槽/ }, function (err, doc) {
        console.log(doc);
        res.json(doc);
    }).sort("-num").exec(function (err, docs) {
        console.log(docs);
    })
})

app.post('/getarticle5', function (req, res) {
    console.log(req.body);
    let sousuo = req.body.sousuo;
    bbq.find({ Content: sousuo }, function (err, doc) {
        console.log(doc);
        res.json(doc);
    }).sort("-num").exec(function (err, docs) {
        console.log(docs);
    })
})

app.post('/removearticle', function (req, res) {

    let blog = req.body.biaoji;
    console.log(blog);

    article.deleteOne({ _id: blog }, function (err, doc) {
        console.log(doc);
    })

    res.end('我收到了');
})

app.listen(3002, function () {
    console.log('Example app listening on port 3001!')
})