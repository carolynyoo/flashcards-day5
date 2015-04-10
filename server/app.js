var path = require('path');
var express = require('express');
var app = express();
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');
var bowerPath = path.join(__dirname, '../bower_components');

var FlashCardModel = require('./models/flash-card-model');

app.use('/bower_components', express.static(bowerPath));
app.use(express.static(publicPath));

app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});


app.get('/cards', function (req, res) {

    var modelParams = req.query.category ? { category: req.query.category } : {};

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 10000);
    });

});